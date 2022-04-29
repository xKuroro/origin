import React, { useState, useEffect } from "react";
import { AiFillMessage } from "react-icons/ai";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { withRouter } from "react-router";
import "./Pages.css";
import { Imagesdata } from "./Imagesdata";
import { IconContext } from "react-icons/lib";
import { IoMdThermometer } from "react-icons/io";

const Funny = ({ theme }) => {
  const [upVote, setUpvote] = useState(Imagesdata.upvote);
  const [downVote, setDownVote] = useState(Imagesdata.downvote);
  const [edited, setEdited] = useState("");
  const [data, setData] = useState([Imagesdata]);
  const [items, setItems] = useState([]);

  const sectionLabel = Imagesdata.filter((imgData) => {
    return imgData.section === "Funny";
  });

  console.log(upVote);

  const clickedUpvote = (item) => {
    const newItem = [(item.upvote = true), (item.downvote = false)];
    console.log(newItem);
    setUpvote(newItem);
    setDownVote((newItem.downvote = false));
    // setDownVote(false);
    // setVoteColor(true);
  };

  const clickedDownvote = (item) => {
    const newItems = [(item.downvote = true), (item.upvote = false)];
    console.log(newItems);
    setDownVote(newItems);
    setUpvote();
  };

  const activeColor = () => {};

  // const doubleClick = (item) => {
  //   const newItems = [(item.downvote = false), (item.upvote = false)];
  // };
  useEffect(() => {
    // setDownVote(upVote);
    // setUpvote(downVote);
  }, []);
  return (
    <>
      <IconContext.Provider value={{ colors: (props) => props.theme.color }}>
        <div className="pages-container">
          <ul className="funny" data-theme={theme}>
            {sectionLabel.map((item, index) => {
              return (
                <>
                  <li key={index} className={item.className}>
                    <div className="sectionLabel">
                      <img src={item.imgsection} alt="tae" />
                      <span>{item.section}</span>
                    </div>
                    <div className="sectionImage">
                      <img src={item.image} alt="tae" />
                      <div className="sectionUpandDownVote">
                        <div className="likeDislikeContainer">
                          <FaArrowUp
                            onClick={() => clickedUpvote(item)}
                            // onDoubleClick={doubleClick(item)}
                            className={
                              item?.upvote && !item?.downvote ? "active" : ""
                            }
                          />
                          <FaArrowDown
                            onClick={() => clickedDownvote(item)}
                            // onDoubleClick={doubleClick}
                            className={
                              item?.downvote && !item?.upvote ? "active" : ""
                            }
                          />
                          <AiFillMessage />
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default withRouter(Funny);
