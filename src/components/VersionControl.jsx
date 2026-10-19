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
      style={{ border: `4.5px solid ${SongData[props.songIndex].lineColor}`, height: `${Math.ceil(SongData[props.songIndex].version.length / 3) * 5}%`, bottom: `75%` }}
    >
      <div style={{
        opacity: ".85",
        height: "100%",
        padding: "5px",
        marginTop: "auto",
        marginBottom: "auto"
      }}>
        {
          SongData[props.songIndex].version?.map((child, i) => (
            <button
            key={i}
            className={`w-1/3`}
            onClick={() => onClick(child.name)}
            style={{
              backgroundColor: child.name === version ? SongData[props.songIndex].lineColor : `transparent`,
              color: child.name === version ? SongData[props.songIndex].backgroundColor : `white`,
              borderRadius: "5px",
              fontWeight: child.name === version ? "500" : "normal",
              height: `${1 / Math.ceil(SongData[props.songIndex].version.length / 3) * 100}%`
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
