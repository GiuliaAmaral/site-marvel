import { Error, PriorityHigh } from "@mui/icons-material";
import { CircularProgress } from "@mui/material";
import ComponenteMsg from "./msg/msg";

export default function ComponenteLoadingAndMsg(props) {
    return (<>
        {(props?.loading === true) ? (<>
            <ComponenteMsg icon={<CircularProgress />} title={`Carregando...`} />
        </>) : (<>
            {(props?.error) ? (<>
                <ComponenteMsg icon={<Error fontSize="large" color="white" />} title={`Erro`} subtitle={props?.error?.subtitle} description={props?.error?.description} btnTryAgain={true} />
            </>) : (<>
                {(props?.msg) ? (<>
                    <ComponenteMsg {...props?.msg} icon={props?.msg?.icon || <PriorityHigh fontSize="large" color="white" />} />
                </>) : (<>
                    {props.children}
                </>)}
            </>)}
        </>)}
    </>)
}