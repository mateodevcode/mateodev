import { useState } from "react";
import { AuthContext } from "./AuthContext";
import Minicard from "../img/minicard/minicard-1.jpg";

export const AuthProvider = ({ children }) => {
  const [themma, setThemma] = useState("dark");
  const [mostrarMenu, setMostrarMenu] = useState("ocultarMenu");

  const [mostrarContacto, setMostrarContacto] = useState("ocultarContacto");

  const onclickMostrarContacto = () => {
    if (mostrarContacto == "ocultarContacto") {
      setMostrarContacto("contacto")
      setMostrarMenu("ocultarMenu")
    } else {
      setMostrarContacto("ocultarContacto")
    }
  }
  
  const onClickThemma = () => {
    if (themma == "dark") {
      setThemma("light");
    } else {
      setThemma("dark");
    }
  };

  const onclickMenu = () => {
    if (mostrarMenu == "ocultarMenu") {
      setMostrarMenu("menu");
    } else {
      setMostrarMenu("ocultarMenu");
    }
  };


  const handlerDescargarImg = () => {
    const imgUrl = Minicard;
    const downlandLink = document.createElement("a");
    downlandLink.href = imgUrl;
    downlandLink.download = "MiniCard.jpg";
    document.body.appendChild(downlandLink);
    downlandLink.click();
    document.body.removeChild(downlandLink);
  };


  return (
    <AuthContext.Provider
      value={{ themma, onClickThemma, mostrarMenu, onclickMenu, mostrarContacto, onclickMostrarContacto, handlerDescargarImg}}
    >
      {children}
    </AuthContext.Provider>
  );
};
