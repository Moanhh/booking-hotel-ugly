import React from 'react';
import './Featured.css';
import dh from '../img/dh.jpg';
import {Link} from 'react-router-dom'

function Featured() {
  return (
    <div className="featured text-center">
        <div className="featuredItem">
            <img className="featuredImg" src={dh} alt={"img"}/>
            <div className="featuredTitles">
                <Link to="/hotels/111" style={{ textDecoration: 'none' }}>
                    <h3 className="txt">Duck's house in Ha Noi city</h3>
                </Link>
                
                <h1>111</h1>
            </div>
        </div>

        <div className="featuredItem">
        <img className="featuredImg" src={dh} alt={"img"}/>
            <div className="featuredTitles">
                <h3>Duck's house in Hai Phong city</h3>
                <h1>222</h1>
            </div>
        </div>

        <div className="featuredItem">
        <img className="featuredImg" src={dh} alt={"img"}/>
            <div className="featuredTitles">
                <h3>Duck's house in HCM city</h3>
                <h1>333</h1>
            </div>
        </div>

    </div>
  )
}

export default Featured;

