import React from "react";
import SongData from "./SongData.json";

const VersionControl = (props) => {
  let keyPress = new Audio();
  const version = SongData[props.songIndex].version?.find(v => v.name === props.version) == null ? "Original" : props.version;

  const onClick = (newVersion) => {
    keyPress.src = `./assets/audios/notes.mp3`;
    keyPress.volume = props.uiVolume;
    keyPress.play();
    props.changeVersion(newVersion);
  };

  return (
    <div
      className="version-control-container"
      style={{ border: `4.5px solid ${props.lineColor}`, height: `${Math.ceil(SongData[props.songIndex].version.length / 3) * 5}%`, bottom: `75%` }}
    >
      <div className="version-control">
        {
          SongData[props.songIndex].version?.map((child, i) => (
            <button
              key={i}
              className={`button ${child.name === version ? 'button-highlighted' : 'button-normal hover-click-element'}`}
              style={{
                '--line-color': props.lineColor,
                '--background-color': props.backgroundColor,
              }}
              onClick={() => onClick(child.name)}
            >
            {child.name}
            </button>
          ))
        }
      </div>
    </div>
  );
};

export default VersionControl;
