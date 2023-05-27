import React from 'react';
import myPic from '../../Assets/Images/mepic1.png'


export default function About() {
    const style = {
        width: "200px"
    }
    return (
        // image of me 
        // info about me
        <div className="container vh-100 mt-5">
            <div style={style}>
                <img src={myPic} className="img-thumbnail" alt="self picture"></img>
            </div>
        </div>
    );
}