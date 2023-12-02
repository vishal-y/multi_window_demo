import {useState ,  useCallback, useEffect } from 'react';


export default function Multi() {

    const [Multi, setMulti] = useState(false)

    const setPositionElement = () => {
        const ele = document.getElementById("main");
        const eleX =  window.screen.availWidth / 2 - ele.clientWidth / 2;
        const eleY = window.screen.availHeight / 2 - ele.clientHeight / 2;
        ele.style.transform = `translate(${-(window.screenX - eleX)}px, ${-(window.screenY - eleY)}px)`;
      };
      
      const animatePosition = useCallback(() => {
        setPositionElement();
        requestAnimationFrame(animatePosition);
      },[]);

      useEffect(() => {

        try{
            if(!localStorage.length){
                localStorage.setItem("tabs",1)
            }
            else{
                const total = parseInt(localStorage.getItem("tabs"));
                localStorage.setItem("tabs",total+1)
                setMulti(true)
            }
         }
         catch(e){
            console.log(eval)
         }
        animatePosition();
        return () =>  cancelAnimationFrame(animatePosition);
      }, [animatePosition]);
      

  return (
    <div>

<div id='main' className=' h-[33rem] absolute flex justify-center  items-center'>


{ Multi &&
<div id='outRound' className=" rounded-full flex justify-center items-center h-[22rem] w-[22rem] border-2 border-[#9963ff] relative">

  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
    <span className='logo bg-[#212b36] border-2 border-purple-600 rounded-full h-12 w-12 flex justify-center items-center' style={{
      position: "absolute",
      bottom: "14.2rem",
      left: "4.5rem", transform: 'translate(-50%, -50%) rotate(0deg) translate(calc(50% + 14rem), 0)'
    }}>
      
    </span>
    <span className='logo  bg-[#212b36] border-2 border-purple-600 rounded-full h-12 w-12 flex justify-center items-center' style={{
      position: "absolute",
      left: "12rem",
      bottom: "11rem", transform: 'translate(-50%, -50%) rotate(120deg) translate(calc(50% + 13.5rem), 0)'
    }}>
    
    </span>
    <span className='logo  bg-[#212b36] border-2 border-purple-600 rounded-full h-12 w-12 flex justify-center items-center' style={{
      position: "absolute",
      left: "6rem",
      bottom: "3rem", transform: 'translate(-50%, -50%) rotate(-120deg) translate(calc(50% + 9rem), 0)'
    }}>
    
    </span>

    <span className='logo  bg-[#212b36] border-2 border-purple-600 rounded-full h-12 w-12 flex justify-center items-center' style={{
      position: "absolute",
      left: "9rem",
      bottom: "13.5rem",
      transform: 'translate(-50%, -50%) rotate(-120deg) translate(calc(50% + -19rem), 0)'
    }}>
    
    </span>
  </div>

</div>

}


<div id='inRound' className=" border-purple-600 absolute rounded-full bg-[#151030] h-[12rem] w-[12rem] flex justify-center items-center">

  <div className="rounded-full border border-purple-600 bg-[#050816] h-[8rem] w-[8rem] flex justify-center items-center">💻</div>

</div>

</div>


    </div>
  )
}
