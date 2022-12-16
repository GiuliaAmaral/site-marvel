import './card.css';


import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function ComponentCard(props) {
    return (<>

        <Card className="card">

            <CardActionArea>
                <CardMedia
                    component="img"
                    image={props.img}
                    alt={props.alt}
                    height="193px"
                />
                <CardContent className="cardContent">
                    <Typography variant="p" fontWeight={600}>
                        {props.title}
                    </Typography>
                </CardContent>
            </CardActionArea>

        </Card>


    </>)
}