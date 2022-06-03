import React from "react";
import Hehe from "../Images/hehe.jpg";
import Funny from "../Images/funny.jpg";
import collection from "../Images/images.jpg";
import * as IoIcons from "react-icons/io";
import { uuid } from "uuidv4";

export const SidenavData = [
  {
    title: "Funny",
    path: "/funny",
    image: Funny,
    id: uuid(),
    cName: "nav-text",
  },
  {
    title: "Hentai",
    path: "/hentai",
    image: Hehe,
    id: uuid(),
    cName: "nav-text",
  },
  {
    title: "Projects",
    path: "/projects",
    image: collection,
    id: uuid(),
    cName: "nav-text",
    hasDropdown: true,
    iconDown: <IoIcons.IoMdArrowDropdown />,
    iconUp: <IoIcons.IoMdArrowDropup />,

    subNav: [
      {
        title: "Todo App",
        id: uuid(),
        path: "/projects/todo-app",
        cName: "nav-text",
      },
      {
        title: "Tik Tok Toe",
        id: uuid(),
        path: "/projects/tiktok-toe",
        cName: "nav-text",
      },
      {
        title: "Number guessing",
        id: uuid(),
        path: "/projects/number_Guessing_game",
        cName: "nav-text",
      },
    ],
  },
];
