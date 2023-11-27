import { useState } from "react";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const [themma, setThemma] = useState("light");
  const [mostarMenu, setMostarMenu] = useState("ocultarMenu");


  const [mostarContacto, setMostrarContacto] = useState("ocultarContacto");

  const onclickMostrarContacto = () => {
    if (mostarContacto == "ocultarContacto") {
      setMostrarContacto("contacto")
      setMostarMenu("ocultarMenu")
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
    if (mostarMenu == "ocultarMenu") {
      setMostarMenu("menu");
    } else {
      setMostarMenu("ocultarMenu");
    }
  };

  return (
    <AuthContext.Provider
      value={{ themma, onClickThemma, mostarMenu, onclickMenu, mostarContacto, onclickMostrarContacto }}
    >
      {children}
    </AuthContext.Provider>
  );
};
