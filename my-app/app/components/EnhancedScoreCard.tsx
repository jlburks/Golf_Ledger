
import { SetStateAction, useState } from 'react';
import Plays from './plays';

import './EnhancedScoreCard.css'

export default function EnhancedScoreCard() {

  const [selecthole,setSelectHole] = useState("h1")

  const courseInfo = {
    h1:{
      yds:395,
      par:4,
      hcp:5
    },
    h2:{
      yds:420,
      par:4,
      hcp:3
    },
    h3:{
      yds:511,
      par:5,
      hcp:13
    },
    h4:{
      yds:363,
      par:4,
      hcp:9
    },
    h5:{
      yds:199,
      par:3,
      hcp:15
    },
    h6:{
      yds:541,
      par:5,
      hcp:7
    },
    h7:{
      yds:160,
      par:3,
      hcp:17
    },
    h8:{
      yds:330,
      par:4,
      hcp:11
    },
    h9:{
      yds:437,
      par:4,
      hcp:1
    }
  }
    
  const currentHole = (x) => {
    setSelectHole(x)
  }
  return (
    <>
    <div className="holeDetails grid grid-flow-col justify-items-center">
    <div>Hole {selecthole[1]}</div>
    <div>Par {courseInfo[selecthole]["par"]}</div>
    <div>handicap: {courseInfo[selecthole]["hcp"]}</div>
    </div>
    <div className="yardsRemaining">
      <h1>244 YDS</h1>
    </div>
    <div className="golfStrokeTracker">
    <Plays />
    </div>

      <div className="grid grid-cols-9 gap-1">
        <button className="bg-blue-500" onClick={()=>currentHole("h1")}>01</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h2")}>02</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h3")}>03</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h4")}>04</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h5")}>05</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h6")}>06</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h7")}>07</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h8")}>08</button>
        <button className="bg-blue-500" onClick={()=>currentHole("h9")}>09</button>
    </div>
</>
  );    
}
