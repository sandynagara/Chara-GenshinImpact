import React from 'react'

export default function navPorto({filter,cek}) {

    const pilihan = ["All","Inazuma","Mondstart","Liyue"]


    return (
        <div className="navPorto">
            {pilihan.map((e,index)=>{
                return (
                    <p className="navPortoItem" key={index} style={cek==e ? {color:"wheat"}:{}} onClick={()=>{filter(e)}}>{e}</p>
                )
            })}
        </div>
    )
}
