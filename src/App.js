import BasicAlert from './components/BasicAlert';
import BasicButton from './components/BasicButton';
import ListaEquipaje from './components/ListaEquipaje';
//import { PrimerComponente } from './components/PrimerComponente';


function App() {
  
  //let titulo1="Login";
  return (
      <div className="App">
        <>
        {/* <PrimerComponente titulo={titulo1} nombre={"Tomás Sosa"}/>
        <PrimerComponente titulo={"Segundo componente"} nombre={"Elias Ortiz"} />
        <PrimerComponente titulo={"Tercer componente"} nombre={"Ian Cano"}/> */}
        {/* <BasicButton></BasicButton>
        <BasicAlert></BasicAlert> */}
        <ListaEquipaje ></ListaEquipaje>
        </>
      </div>
    
  );
}

export default App;
