import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

export const iconos = [
  {
    nombre: "Linkedin",
    linkTo: "https://www.linkedin.com/in/mateo-lizcano-noriega/",
    icon: <BsLinkedin />,
    label: "Ver mi linkedin",
    colorHover: "hover:bg-blue-600",
  },
  {
    nombre: "Instagram",
    linkTo: "https://www.instagram.com/mateo.lizcano.noriega/",
    icon: <BsInstagram />,
    label: "Ver mi instagram",
    colorHover: "hover:bg-pink-500",
  },
  {
    nombre: "Facebook",
    linkTo: "https://www.facebook.com/mateo.lizcano.noriega/",
    icon: <BsFacebook />,
    label: "Ver mi facebook",
    colorHover: "hover:bg-blue-500",
  },
  {
    nombre: "Github",
    linkTo: "https://github.com/mateodevcode",
    icon: <BsGithub />,
    label: "Ver mi Github",
    colorHover: "hover:bg-gray-800",
  },
  {
    nombre: "Whatsapp",
    linkTo: "https://api.whatsapp.com/message/YZ472YWAWRA5E1?autoload=1&app_absent=0",
    icon: <BsWhatsapp />,
    label: "Ver mi Whatsapp",
    colorHover: "hover:bg-green-600",
  },
];
