import React from "react";
import SongData from "./SongData.json";
import TitleDisplay from "../TitleDisplay";

const PlaylistItem = (props) => {
  const [hoverColor, setHoverColor] = React.useState("");
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
        onClick={clickHandle}
        onMouseEnter={() => setHoverColor("rgba(255,255,255,0.3)")}
        onMouseLeave={() => setHoverColor("transparent")}
        style={{
          opacity: ".85",
          backgroundColor:
            props.songIndex === props.id - 1
              ? props.lineColor
              : hoverColor,
          padding: `5px`,
          color:
            props.songIndex === props.id - 1
              ? props.backgroundColor
              : "white",
          fontWeight: props.songIndex === props.id - 1 ? "500" : "normal",
          borderRadius: "5px",
        }}
      >
        {props.index}. {title}
      </p>
      <p
        style={{
          opacity: ".85",
          paddingTop: "2px",
          borderBottom: `3px dotted ${props.lineColor}`,
        }}
      >
      </p>
    </div>
  );
};

export default PlaylistItem;
