import { useState } from "react";
import { AuthContext } from "./AuthContext";

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


  return (
    <AuthContext.Provider
      value={{ themma, onClickThemma, mostrarMenu, onclickMenu, mostrarContacto, onclickMostrarContacto}}
    >
      {children}
    </AuthContext.Provider>
  );
};
