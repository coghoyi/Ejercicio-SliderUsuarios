import { useState } from "react";
import { USERS } from "../../constants/users";

const Slider = ({name, username, email,profileImage}) => {
    const [position, setPosition] = useState(0)
    return (
        <>
        <img src={USERS[position].profileImage} alt="Imagen" />
        <h1>Name: {USERS[position].name}</h1>
        <p>User: {USERS[position].username}</p>
        <p>Email: {USERS[position].email}</p>
        <button onClick={()=> mooveUp(position,setPosition)}>Siguiente</button>
        <button onClick={()=> mooveDown(position,setPosition)}>Anterior</button>
        </>
    )
};

const mooveUp = (position, setPosition) => {
    if (position < 6) {
      setPosition(position + 1);
    }
  };
const mooveDown = (position, setPosition) => {
    if (position > 0) {
      setPosition(position - 1);
    }
  };

export default Slider;
