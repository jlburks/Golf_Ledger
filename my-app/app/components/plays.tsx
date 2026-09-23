import { SetStateAction, useState } from 'react';

export default function Plays(x) {
    const [selecthole,setSelectHole] = useState("h1")


    let strokeSymbs = []

    const bingo = () => {
        console.log("hello")
    }

    const createSybs = () => {
        for (let i=0;i<x.maxStrokes;i++){
        strokeSymbs.push(
            <button onClick={bingo} className="bg-green-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-full}" key={i+1} >
                    -
            </button>
        )
        
     }
    }

     createSybs()

    let maxStrokes = x*2
                
    return(
        <>

        <div className="grid grid-cols-9 gap-1">
           {
                strokeSymbs
            }

        </div>
        </>
    )
}