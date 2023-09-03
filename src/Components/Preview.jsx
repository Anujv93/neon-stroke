import React from 'react';
import styles from './preview.module.css';

const Preview = ({text,color,font}) => {
    console.log(color)
  return (
    <div>
        <h1 data-text={text} style={{color:color,fontFamily:font,position:'absolute',top:'25%',left:'20%',textShadow: `0 0 20px ${color}`}} className={styles.neon}>
    {text || "text preview"} 
        </h1>
        <h1 data-text={text} style={{color:color,fontFamily:font,position:'absolute',top:'25%',left:'20%',textShadow: `0 0 20px ${color}`}} className={styles.neonter}>
    {text || "text preview"} 
        </h1>

        <img style={{position:'absolute',top:"5%",left:'3%',width:'35%',zIndex:'1'}} src="https://t4.ftcdn.net/jpg/04/45/74/21/360_F_445742153_gpKY8p3CDSkeFfuek60nhm9f9kjCzBok.jpg" alt="" />
    </div>
  )
}

export default Preview