export default class ApiMarvelV1PublicCharacters {

    static async getAll(params = {}) {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        params.apikey = process.env.REACT_APP_PUBLIC_KEY;
        params.orderBy = "name";
        let queryStringUrl = new URLSearchParams(params).toString();

        try {
            let response = await fetch(`${process.env.REACT_APP_MARVEL_ENDPOINT}/characters?${queryStringUrl}`, requestOptions);
            let responseJson = await response.json();
            if (response.ok) {
                return (responseJson?.data || responseJson);
            } else {
                throw new Error(response);
            }
        } catch (error) {
            console.error(error);
            console.log("Error: ", error);
            throw error;
        }
    }

}