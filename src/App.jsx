import "./App.css";
import ItemListContainer from "./components/ItemList/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <ItemListContainer greetings="Bienvenidos a nuestra Tienda!" />
        </header>
      </div>
    </>
  );
}

export default App;

//import logo from "./logo.svg";
//import "./App.css";

//Importamos componentes

//import MyButton from "./components/MyButton/MyButton";

//Importamos ItemListContainer <Item...

//import ItemListContainer from "./components/ItemList/ItemListContainer";
//import NavBar from "./components/NavBar/NavBar";


//function App() {
 // const title = "Bienvenidos a la clase 4!";

  /* CSS-in-JS*/
  //const styleh3 = { backgroundColor: "purple", color: "white" };

 // let titulo = <h3 style={styleh3}>Hola comisión #34815!😎</h3>;

 // return (
  //  <>
    //  <div className="App">
      //  <header className="App-header">
       //   <NavBar/>
       //   {titulo}
       //   <img src={logo} className="App-logo" alt="logo" />
       //   <p>{title}</p>

       //   <ItemListContainer greeting="Bienvenidos a nuestra Tienda!" />
     //   </header>
   //   </div>
  //  </>
 // );
//}

//<MyButton text="Boton 1"color="darkgreen"/>
//<MyButton text="Boton 2"color="purple"/>
//<MyButton text="Boton 3"color="darkblue"/>

//<MyButton color="darkgreen">Boton 1 <MyButton/> ---> children
//<MyButton color="purple">Boton 2 <MyButton/> ---> children
//<MyButton color="darkblue">Boton 3 <MyButton/> ---> children

//export default App;