//Importamos estilo css

import "./MyButton.css";

function MyButton(props) {
  console.log(props);

  const styleButton = { backgroundColor: props.color };

  return (
    <button style={styleButton} className="btn">
      {props.text}
    </button>
  );
}

//children
//return (
//<button style={styleButton} className="btn">
//{props.children} ---> children
//</button>
//);

//Otra manera

//function MyButton(props) {
//console.log(props);

//return (
//<button style={{ backgroundColor: props.color }} className="btn">
//{props.text}
//</button>
//);
//}


//Exportamos el botón

export default MyButton;
