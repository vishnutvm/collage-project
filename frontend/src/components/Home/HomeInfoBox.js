import React from "react";
import data from "./info-data";

const HomeInfoBox = () => {
  return (
    <div className="infoboxes --mb2">
      {data.map((item, index) => {
        const { icon, heading, text } = item;
        return <div className="infobox" key={index}>
            <div className="icon" >{icon}</div>
            <div className="text" >
                <h4>{heading}</h4>
                <p className="--text-sm">{text}</p>
            </div>
        </div>;
      })}
    </div>
  );
};

export default HomeInfoBox;
