import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsList } from "react-icons/bs";
import { Link } from "react-router-dom";
import LogoMateoDev from "./logo/LogoMateoDev";
import LogoRockasus from "./logo/LogoRockasus";
import EnlaceMenuNav from "./EnlaceMenuNav";
import { useAuth } from "../context/useContext";
import Contacto from "./Contacto";

const MenuNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { themma } = useAuth();

  return (
    <>
      <BsList
        className="md:hidden sm:flex"
        color={`${themma == "dark" ? "white" : "black"}`}
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent
          bg={`${themma == "dark" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"}`}
          color={`${themma == "dark" ? "white" : "black"}`}
        >
          <DrawerCloseButton />
          <DrawerHeader bg={`${themma == "dark" ? "rgba(0, 0, 0, 0.9)" : "rgba(255, 255, 255, 0.9)"}`}>
            <Link to="https://mateodev.rockasus.com/" className="flex mb-5">
              <div
                className="flex flex-row justify-center items-center font-semibold"
                title="Página principal de Mateodev"
              >
                <LogoMateoDev />
                <p className="bg-blue-800 px-2 py-0.5 rounded-xl text-white mx-1">
                  Mateo
                </p>
                <p>Dev</p>
              </div>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <div className="w-full flex flex-col justify-center items-start">
              <EnlaceMenuNav nombre={"Sobre mí"} LinkTo={"/"} target={null}/>
              <EnlaceMenuNav nombre={"Portafolio"} LinkTo={"/portafolio"} target={null}/>
              <EnlaceMenuNav nombre={"Blog"} LinkTo={"/"} target={null}/>
              <EnlaceMenuNav nombre={"Aprender programación"} LinkTo={"/"} target={"_blank"}/>
              <EnlaceMenuNav nombre={"Aprende inglés gratis"} LinkTo={"https://aprender-ingles.rockasus.com/"} target={"_blank"}/>
              <Contacto nombre={"Contacto"} classP={"py-1 px-2 hover:bg-red-700 hover:text-white cursor-pointer"} classDiv={"my-2 w-full"} />
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Link to="https://rockasus.com" target="_blank" className="mx-2">
                <LogoRockasus />
              </Link>
            <Button
              bg={`${themma == "light" ? "blue.600" : "white"}`}
              color={`${themma == "light" ? "white" : "black"}`}
              onClick={onClose}
            >
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MenuNav;
