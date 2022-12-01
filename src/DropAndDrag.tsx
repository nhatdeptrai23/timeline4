import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Image } from 'react-konva';
import useImage from 'use-image';

// const linkImage = ["https://konvajs.org/assets/lion.png", "/anh1.jpeg", "/logo192.png"]

const LionImage = () => {     
        const [image] = useImage("https://konvajs.org/assets/lion.png");    
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

            <LionImage />
            <LionImage/>
            <LionImage />
            <LionImage />
     
        </Layer>
      </Stage>
    </div>
  );
}
