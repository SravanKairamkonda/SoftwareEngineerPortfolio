import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdDashboard,
  MdBarChart,
  MdPerson,
  MdHome,
  MdPersonPin,
  MdCode,
  MdContacts
} from "react-icons/md";

import Dashboard from "./views/dashboard/dashboard";
import About from "./views/about/about";
import Resume from "./views/resume/resume";
import Projects from "./views/projects/projects";

const routes = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    component: Dashboard
  },
  {
    name: "About Me",
    path: "/about",
    icon: <Icon as={MdPersonPin} width="20px" height="20px" color="inherit" />,
    component: About
  },
  {
    name: "Resume",
    path: "/resume",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: Resume
  },
  {
    name: "Projects And Blogs",
    path: "/projects",
    icon: <Icon as={MdCode} width="20px" height="20px" color="inherit" />,
    component: Projects
  },
  {
    name: "Hobbies",
    path: "/hobbies",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />
    // component: Profile
  },
  {
    name: "Contact Me",
    path: "/contact",
    icon: <Icon as={MdContacts} width="20px" height="20px" color="inherit" />
    // component: Profile
  }
];

export default routes;
