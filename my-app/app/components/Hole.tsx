export default function Hole({holeInfo}) {
  const setHoleNum = () => {
    console.log(holeInfo.holeNum, holeInfo.centgreen,holeInfo.par,holeInfo.handicap)
  }
  return (
    <button onClick={setHoleNum}>
      {holeInfo.holeNum}
    </button>
  );
}

// holeNum: 1, centgreen:"00yds", par:4, handicap:8