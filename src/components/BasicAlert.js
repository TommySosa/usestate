import { Alert } from "react-bootstrap";
export function BasicAlert(){
    return(
        <>
           <h1>Alert</h1>
           {
            [
                'primary',
                'secondary',
                'success'
            ].map((variant) => (
                <Alert key={variant} variant={variant}>
                    Esto es un ejemplo de {variant}
                </Alert>
            ))
           }
        </>
    );
}

export default BasicAlert;