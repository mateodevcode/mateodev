import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useAuth } from "../context/useContext";
import CVitae from "./Cvitae";

const Contacto = ({classDiv, classP, nombre}) => {
  const { handlerDescargarImg } = useAuth()
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen} className={classDiv}>
        {" "}
      <p className={classP}>{nombre}</p>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent bg={"gray.100"} color={"white"}>
          <ModalHeader></ModalHeader>
          <ModalCloseButton color={"black"} />
          <ModalBody>
            <CVitae />
          </ModalBody>
          <ModalFooter>
          <div className="flex flex-row justify-end  items-center w-full">
          <Button bg={"blue.500"} color={"white"} mx={1} onClick={onClose}>
              Compartir
            </Button>
            <Button bg={"green.500"} color={"white"} mx={1} onClick={handlerDescargarImg}>
              Descargar
            </Button>
          </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Contacto;
