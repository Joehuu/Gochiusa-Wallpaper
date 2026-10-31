import React from "react";
import SongData from "./SongData.json";

const VersionControl = (props) => {
  const [hoveredIndex, setHoveredIndex] = React.useState("");
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
      style={{ border: `4.5px solid ${SongData[props.songIndex].lineColor}`, height: `${Math.ceil(SongData[props.songIndex].version.length / 3) * 5}%`, bottom: `75%` }}
    >
      <div className="version-control">
        {
          SongData[props.songIndex].version?.map((child, i) => (
            <button
            key={i}
            onClick={() => onClick(child.name)}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex("")}
            style={{
              backgroundColor: child.name === version ? SongData[props.songIndex].lineColor : (hoveredIndex === i ? "rgba(255,255,255,0.3)" : `transparent`),
              color: child.name === version ? SongData[props.songIndex].backgroundColor : `white`,
              borderRadius: "5px",
              fontWeight: child.name === version ? "500" : "normal",
            }}
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
