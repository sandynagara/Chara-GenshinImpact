import React from 'react'

export default function navPorto({filter}) {

    const pilihan = ["All","Inazuma","Mondstart","Liyue"]


    return (
        <div className="navPorto">
            {pilihan.map((e)=>{
                return (
                    <p className="navPortoItem" onClick={()=>{filter(e)}}>{e}</p>
                )
            })}
        </div>
    )
}
