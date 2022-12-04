import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Image } from 'react-konva';
import useImage from 'use-image';

const linkImage = ["https://konvajs.org/assets/lion.png", "/anh1.jpeg", "/logo192.png"]
// const link = "https://konvajs.org/assets/lion.png"
function LionImage(_prop: any){     
        const [image] = useImage(_prop.link);    
        return <Image image={image}
         draggable={true} 
         onDragEnd={(e)=>{console.log("coordinates",e.target._lastPos,"id:", e.target._id )}} 
         />;
  };


const sty={
    border:"#C147E9 solid 2px",
    borderRadius:"8px",
    width: "900px",
    height:"500px",
    marginTop : "3rem",
    marginLeft: "20%"

}
export default function TimeLine(){
  return (
    <div>
      
      <Stage width={900} height={500} style={sty} >
        
        <Layer>

            <LionImage link={"https://konvajs.org/assets/lion.png"}/>
            <LionImage link={"https://cdn.sforum.vn/sforum/wp-content/uploads/2018/11/2-9.png"}/>
     
        </Layer>
      </Stage>
    </div>
  );
}
