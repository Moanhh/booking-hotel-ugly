import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import dh1 from '../../components/img/dh1.jpg';

const myStyles= {
  background:"no-repeat",
  backgroundSize:"cover",
  height:"500px",
  width:"700px",
  marginTop:"20px"
}


const Hotel = () => {
  return (
    <div>
      <Navbar/>
      <div className="featuredItem">
            <img className="featuredImg  " src={dh1} alt={"img"} style={myStyles}/>
            <div className="featuredTitles">
              <h3 className="txt">Duck's house in Ha Noi city</h3>
                <h1>111</h1>
            </div>
        </div>
      
    </div>
  )
}

export default Hotel