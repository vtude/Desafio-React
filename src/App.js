
import "./App.css";
import  Header  from "./components/Header";
import  Card  from "./components/Card";
import {img1,img2,img3} from "./Assets/Img"
import  Footer  from "./components/Footer";


function App() {
  return (
    <div className="App">
    <Header title="Galeria React"/>
    <Card url= {img1} title= "Flores" description= "Año 2016" />
    <Card url= {img2} title= "Mascota" description= "Año 2019" />
    <Card url= {img3} title= "Canada" description= "Año 2022" />
    <Footer text="Galeria de Imagenes Personales" />
  


    </div>
  );
}

export default App;
