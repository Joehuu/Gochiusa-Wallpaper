import React from "react";
import SongData from "./SongData.json";
import TitleDisplay from "../TitleDisplay";

const PlaylistItem = (props) => {
  let keypress = new Audio();
  const clickHandle = () => {
    props.changeId(props.id - 1);
    keypress.src = "./assets/audios/keypress.mp3";
    keypress.volume = props.uiVolume;
    keypress.play();
  };

  let title;
  
  switch (props.titleDisplay)
  {
    default:
    case TitleDisplay.English:
      title = SongData[props.id - 1].name;
      break;
    case TitleDisplay.Original:
      title = SongData[props.id - 1].nameOriginal ?? SongData[props.id - 1].name;
      break;
    case TitleDisplay.Romanized:
      title = SongData[props.id - 1].nameRomanized ?? SongData[props.id - 1].name;
      break;
  }


  return (
    <div className="playlist-item">
      <p
        className={`button ${props.songIndex === props.id - 1 ? 'button-highlighted' : 'button-normal hover-click-element'}`}
        onClick={clickHandle}
        style={{
          '--line-color': props.lineColor,
          '--background-color': props.backgroundColor,
        }}
      >
        {props.index}. {title}
      </p>
      <p
        style={{
          paddingTop: "2px",
          borderBottom: `3px dotted ${props.lineColor}`,
        }}
      >
      </p>
    </div>
  );
};

export default PlaylistItem;
