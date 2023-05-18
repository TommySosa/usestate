function Item({nombre, estaEmpacado}){
    if(estaEmpacado){
        return <div className="item">
            <div className="row">
                <div className="col">
                    {nombre}
                </div>
                <div className="col d-flex justify-content-end">
                    <p className="noEmpacado">* Falta empacar</p>
                </div>
            </div>     
        </div>
    }
    return <div className="item">{nombre} </div>
}

function ListaEquipaje(){
    return(
        <section>
            <h1>Lista de equipos de Andrés</h1>
            <ul>
                <Item estaEmpacado={true} nombre="Traje"/>
                <Item estaEmpacado={false} nombre="Anteojos de sol"/>
                <Item estaEmpacado={true} nombre="Notebook"/>
            </ul>
        </section>
    );
}

export default ListaEquipaje;