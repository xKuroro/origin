import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import { AiFillMessage } from "react-icons/ai";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import "./Pages.css";
import { Imagesdata } from "./Imagesdata";
import { IconContext } from "react-icons";

const Hentai = ({ theme }) => {
  const [upVote, setUpvote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const thisSection = Imagesdata.filter((image) => {
    return image.section == "Hentai";
  });
  const clickedUpvote = (item) => {
    const newItem = [(item.upvote = true), (item.downvote = false)];
    console.log(newItem);
    setUpvote(newItem);
    setDownVote((newItem.downvote = false));
    // setDownVote(false);
    // setVoteColor(true);
  };

  const clickedDownvote = (item) => {
    const newItems = [(item.upvote = false), (item.downvote = true)];
    console.log(newItems);
    setDownVote(newItems);
    setUpvote();
  };

  useEffect(() => {
    console.log("hentai");
  }, []);
  return (
    <>
      <IconContext.Provider value={{ colors: (props) => props.theme.color }}>
        <div className="pages-container">
          <ul className="hentai" data-theme={theme}>
            {thisSection.map((item, index) => {
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
                            className={
                              item?.upvote && !item?.downvote ? "active" : ""
                            }
                          />
                          <FaArrowDown
                            onClick={() => clickedDownvote(item)}
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

export default withRouter(Hentai);
