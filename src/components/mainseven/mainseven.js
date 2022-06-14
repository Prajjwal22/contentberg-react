import React, { useState, useEffect } from "react";
import SmallCard from "../smallcard/smallcard";
import WithImgCard from "../withimgcard/withimgcard";
import "../mainseven/mainseven.css";

function MainSeven() {

  const [sidebarWidth, setSidebarWidth] = useState(undefined);
  const [sidebarTop, setSidebarTop] = useState(undefined);

  useEffect(() => {
    const sidebarEl = document.querySelector('.sidebar').getBoundingClientRect();
    setSidebarWidth(sidebarEl.width);
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.querySelector('.sidebar');
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add('is-sticky');
    } else {
      sidebarEl.classList.remove('is-sticky');
    }
  }

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
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />

      </div>
    </div>
  );
}

export default MainSeven;
