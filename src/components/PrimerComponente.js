export function PrimerComponente(props) {
    function getRandom() {
        var result = Math.random();
        return result;
    }
    console.log(props.titulo);
    return (
        <div className="App">
            <h1>{props.titulo}</h1>
            <h3>Resultado: {getRandom() + 10}</h3>
            <h3>Nombre: {props.nombre}</h3>
            <form className="Formulario">
                <p>
                    <input type="text" className="Entrada" placeholder="Ingrese su nombre" /> <br />
                    <input type="text" className="Entrada" placeholder="Ingrese su apellido" />
                </p>
                <input type="submit" className="btnEntrada" id="guardar" value="Guardar" />
            </form>
        </div>
    );
}