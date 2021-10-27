import React,{useEffect,useState} from 'react'
import { DataWaepon } from './DataWaepon'

function Item({item}){
    return(
        <div className="itemWaepon">
            <div className="imgWaepon">
                <img src={item.img}/>
            </div>
            <p style={{maxLines:1}}><b >{item.title}</b></p>
            <p style={{margin:0 ,fontSize:12+"px"}}>{item.tipe}</p>
        </div>
    )
}

function ItemWaepon({senjata}) {

    const [dataSenjata,setDataSenjata] = useState(DataWaepon)

    useEffect(() => {
        var data= []
        DataWaepon.map((e)=>{
            if(e.tipe==senjata){
                data.push(e)
                console.log(data,"data")
            }
            
        })
        setDataSenjata(data)
    }, [senjata])

    return (
        <div className="kotak">
            {dataSenjata.length !== 0 ? dataSenjata.map((e)=>{
                return <Item item={e} key={e.id}/>
            }) : 
            <div style={{width:20+"vw" ,height:100+"px",display:"flex",justifyContent:"center"}}>
                <h5>Data tidak ditemukan</h5>
            </div> }
        </div>
    )
}

export default ItemWaepon
