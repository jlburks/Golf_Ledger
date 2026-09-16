"use client"
import { useState } from 'react';

import Image from "next/image";
import Hole from "./components/Hole"

export default function Home() {
  const [holeSelected,setHoleSelected] = useState({holeNum: 1, centgreen:0, par:4, handicap:8}) //current course
  const [CourseName,setCourseName] = useState("") //current course
  const [holeNumber,setHoleNumber] = useState(1) // selected hole number
  const [par,setPar] = useState("") // par for hole (3,4,5)
  const [yardage,setYardage] = useState("") // yardage to center of green
  const [strokeGraphic,setStrokeGraphic] = useState("") // keep track of strokes

  

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <h1>Golf Ledger</h1>
        <h2>{holeNumber}</h2>
        <div className="inline-grid grid-cols-3 gap-4">
          <span className="size-12 border border-indigo-600">
            <Hole  holeInfo={{holeNum: 1, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole  holeInfo={{holeNum: 2, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole  holeInfo={{holeNum: 3, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole  holeInfo={{holeNum: 4, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole  holeInfo={{holeNum: 5, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole  holeInfo={{holeNum: 6, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole holeInfo={{holeNum: 7, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole holeInfo={{holeNum: 8, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          <span className="size-12 border border-indigo-600">
            <Hole holeInfo={{holeNum: 9, centgreen:0, par:4, handicap:8}}></Hole>
          </span>
          
        </div>
        
      
    </div>
  );
}
