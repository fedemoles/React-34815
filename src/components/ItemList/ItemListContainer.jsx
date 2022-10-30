import Item from "./Item";

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greetings}</h1>
      <Item
        imgurl="https://http2.mlstatic.com/D_NQ_NP_2X_942095-MLA48655068009_122021-F.webp"
        title="GPU Nvidia 3080ti"
        price={1500}
      />
      <Item
        imgurl="https://http2.mlstatic.com/D_NQ_NP_2X_871237-MLA51840543761_102022-F.webp"
        title="GPU Nvidia 3090ti"
        price={2000}
      />
      <Item
        imgurl="https://ae01.alicdn.com/kf/Sadc734aac5b7480a8a7c7a23f67bcd72o/Geforce-tarjeta-gr-fica-Rtx-4090-serie-RTX40-para-videojuegos-Nvidia-24GB-RTX-4070-RTX-4080.jpg_Q90.jpg_.webp"
        title="GPU Nvidia 4090ti"
        price={3000}
      />
    </div>
  );
}

export default ItemListContainer;
