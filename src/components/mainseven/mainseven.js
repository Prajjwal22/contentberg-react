import React, { useState, useEffect } from "react";
import SmallCard from "../smallcard/smallcard";
import WithImgCard from "../withimgcard/withimgcard";
import "../mainseven/mainseven.css";

function MainSeven() {

  return (
    <div className="mainSeven container">
      <div className="colLeft">
        <h3 className="blockTitle">Marketing</h3>
        <WithImgCard />
        <WithImgCard />
        <WithImgCard />
        <WithImgCard />
        <WithImgCard />
        <WithImgCard />
        <WithImgCard />
        <WithImgCard />
      </div>
      <div className="colRight sidebar">
        <h3 className="blockTitle">Most Commented</h3>
        <ul className="postList">
          <li>
            <SmallCard />
          </li>
          <li>
            <SmallCard />
          </li>
          <li>
            <SmallCard />
          </li>
          <li>
            <SmallCard />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainSeven;
