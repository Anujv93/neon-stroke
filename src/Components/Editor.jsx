import React, { useState } from 'react'
import Preview from './Preview';


const Editor = () => {

    const [text,setText] = useState("");
    const [color,setColor] = useState('white');
    const [font,setFont] = useState('sans-serif');


    const family = [{
        
        font: 'cursive'
    },
    {
        font: 'sans-serif'
    },
    {
        font: `'Satisfy', cursive`
    },
    {
        font: 'monoscope'
    },
    {
        font: 'monoscope'
    },
    {
        font: 'monoscope'
    },
   
    {
        font: `'Satisfy', cursive`
    },
    {
        font: 'monoscope'
    },
    {
        font: 'monoscope'
    },
    
    {
        font: `'Satisfy', cursive`
    },
    {
        font: 'monoscope'
    },
    {
        font: 'monoscope'
    }
    ,
    {
        font: `'Satisfy', cursive`
    },
    {
        font: 'monoscope'
    },
    {
        font: 'monoscope'
    }
    ,
    {
        font: `'Satisfy', cursive`
    },
    {
        font: 'monoscope'
    },
    {
        font: 'monoscope'
    }

    ]

    const handleChange = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        setColor(e.target.value)
        console.log(color)
    }
    
    const handleFont = (e) => {
        setFont(e.target.value)
    }

  return (
    <div style={{width:'100%',backgroundColor:'black',position:'absolute',top:'0%',height:'100vh'}}>
         
       <Preview  text={text} color={color} font={font} />
       
       <div  style={{width:'50%',height:'100%',position:'absolute',top:'0%',right:'10%',color:'white'}}>
        <h2>TYPE YOUR TEXT</h2>
        <input type='text' style={{backgroundColor:'black',color:'white',width:'80%',height:'60px',fontSize:'20px',border:'2px solid white',borderRadius:'5px'}} placeholder='text preview' value={text} onChange={handleChange} />
        
<hr style={{width:'80%',marginTop:'25px'}} />

<h2>Pick Your Font</h2>       
<div style={{width:"80%",margin:"auto",display:'grid',gridTemplateColumns:"repeat(3,200px)",gap:'10px'}}>
        {
          family.map((el,ind) => (
        
            <button key={ind} value={el.font} onClick={handleFont} style={{fontSize:"16px",fontFamily:el.font,height:'45px',backgroundColor:'black',color:'white',border:'2px solid white',borderRadius:'5px',marginRight:'20px'}}>
                {el.font}
            </button>
          ))
        }
     </div>  
        
        
        <hr style={{width:'80%',marginTop:"25px"}} />
        <h2>Select Your Colour</h2>
        <button value='#FFED00'style={{backgroundColor:'#FFED00',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}} onClick={handleClick}>
            
        </button>
        <button value='#E31E24' onClick={handleClick} style={{backgroundColor:'#E31E24',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#009846' onClick={handleClick} style={{backgroundColor:'#009846',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#E5097F' onClick={handleClick} style={{backgroundColor:'#E5097F',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#0000FF' onClick={handleClick} style={{backgroundColor:'#0000FF',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#834E98' onClick={handleClick} style={{backgroundColor:'#834E98',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#FFFFFF' onClick={handleClick} style={{backgroundColor:'#FFFFFF',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#EF7B1B' onClick={handleClick} style={{backgroundColor:'#EF7B1B',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#62BED3' onClick={handleClick} style={{backgroundColor:'#62BED3',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        <button value='#EEDFC8' onClick={handleClick} style={{backgroundColor:'#EEDFC8',width:"25px",height:"25px",borderRadius:'50%',border:'2px solid white',marginRight:"10px"}}>
            
        </button>
        </div>
    </div>
  )
}
//#E5097F
export default Editor