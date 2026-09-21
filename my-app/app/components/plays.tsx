import { SetStateAction, useState } from 'react';

export default function Plays(x) {
    const [selecthole,setSelectHole] = useState("h1")

    console.log('xxx', x)

    let strokeSymbs = []

    const createSybs = () => {
        console.log("helo")
        for (let i=0;i<x.maxStrokes;i++){
            console.log("+++",i)
        strokeSymbs.push(
            <button className="bg-green-500 hover:bg-blue-700 text-white font-bold py-5 px-4 rounded-full">
                    -
            </button>
        )
        
     }
    }

     createSybs()

    let maxStrokes = x*2
        
            console.log("sdfsf. ",strokeSymbs)
        
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