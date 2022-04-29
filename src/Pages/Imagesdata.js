import react from "react";
import Hehe from "../Images/hehe.jpg";
import Funny from "../Images/funny.jpg";
import f2 from "../Pages/FunnyImages/f2.jpg";
import f1 from "../Pages/FunnyImages/f1.gif";
import f4 from "../Pages/FunnyImages/f4.jpg";
import Hentai from "./Hentai";

export const Imagesdata = [
  {
    id: Math.floor(Math.random() * 100),
    imgsection: Funny,
    section: "Funny",
    image: f2,
    className: "list-items",
    upvote: false,
    downvote: false,
  },
  {
    id: Math.floor(Math.random() * 100),
    imgsection: Funny,
    section: "Funny",
    image: f1,
    className: "list-items",
    upvote: false,
    downvote: false,
  },
  {
    id: Math.floor(Math.random() * 100),
    imgsection: Hehe,
    section: "Hentai",
    image: f4,
    className: "list-items",
    upvote: false,
    downvote: false,
  },
];
