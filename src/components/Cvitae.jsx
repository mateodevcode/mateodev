import { Box, Divider, HStack, Image, Text } from "@chakra-ui/react";
import { MdOutlineAssuredWorkload } from "react-icons/md";
import { BsGeoAlt } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import img_perfil2 from "../img/img-perfil2.jpg";
import fondo from "../img/fondo.jpg";

const CVitae = () => {
  return (
    <>
      <div className="w-ful flex justify-center items-center">
        <div className="shadow-lg rounded-lg bg-blue-600 flex flex-col justify-center items-center">
          <div
            className="bg-blue-600 h-full w-full rounded-lg p-8 flex items-start"
            style={{
              backgroundImage: `url(${fondo})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Image
              className="rounded-full -mb-20 bg-gray-100 border-solid border-4 w-40"
              src={img_perfil2}
              alt="Profile Picture"
            />
          </div>
          <Box
            gridColumn="span 8"
            p={8}
            width="full"
            height="full"
            borderRadius="lg"
            textAlign="left"
            mt={10}
          >
            <p className="text-3xl font-bold text-gray-300 my-1">
              Mateo Lizcano Noriega
            </p>
            <HStack spacing={3} color="gray.300">
              <MdOutlineAssuredWorkload size={24} />
              <p className="text-2xl font-semibold text-gray-300 my-1">
                Project Manager
              </p>
            </HStack>
            <HStack spacing={3} color="gray.200">
              <BsGeoAlt size={20} />
              <Text fontSize="lg" my={1}>España</Text>
            </HStack>
            <HStack spacing={3} color="gray.100">
              <IoIosMail size={20} cursor={"pointer"} />
              <Text fontSize="lg" my={1}>mateodevcode@gmail.com</Text>
            </HStack>
          </Box>
          <Divider />
          <div className="px-8 pb-8 pt-6 md:text-base sm:text-xs">
            <p className="my-1">
              📝 MBA - Dirección y administración de empresas
            </p>
            <p className="my-1">🪪 Profesional en Negocios Internacionales</p>
            <p className="my-1">📟 Desarrollador web</p>
            <p className="my-1">📲 Desarrollador Android</p>
            <p className="my-1">📈 Analista de datos</p>
            <p className="my-1">💻 Analista en Ciberseguridad</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CVitae;
