import React, { useState } from 'react';

const comments = [
  {
    id: 1,
    name: 'John Smith',
    comment: 'Comment 1',
  },
  {
    id: 2,
    name: 'Kevin Kart',
    comment: 'Comment 2',
  },
  {
    id: 3,
    name: 'Naimal Khan',
    comment: 'Zero Rank',
  },
];

function Ques2() {
  const [slide, setslide] = useState(0);
  const [disableFront,setDisableFront]=useState(true)

  function handlePrevClick() {
    setslide((prevSlide) => (prevSlide === 0 ? comments.length - 1 : prevSlide - 1));
  }

  function handleNextClick() {
    setslide((prevSlide) => (prevSlide === comments.length - 1 ? 0 : prevSlide + 1));
  }

  return (
    <div className="task2" style={{background:"black",marginLeft:"9rem",opacity:"0.7",display:"grid",justifyContent:"center",marginTop:"30rem",width:"25rem",height:"12rem",borderRadius:"10px"}}>
        {/* <h4>See What Others have to say:</h4> */}
        <div style={{display:"flex",gap:"100px",justifyContent:`${!disableFront && "space-between"} `}}>
      {
            comments[slide].id !== 1 &&         
      <button  style={{background:"white",color:"black",border:"none"}} onClick={handlePrevClick}>
        &lt;
      </button>
}
      <div>
        <h1 style={{color:"white"}}>{comments[slide].name}</h1>
        <h4 style={{color:"white"}}>{comments[slide].comment}</h4>
        
      </div>
      {     comments[slide].id !== 3 &&         
      <button className="next-btn"style={{background:"#white",color:"black",border:"none"}} onClick={handleNextClick}>
        &gt;
      </button>
}
      </div>
    </div>
  );
}

export default Ques2;