import { useCallback, useEffect } from 'react';
import cat from '/src/assets/cat.jpg'

function Test() {

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
    animatePosition();
    return () => cancelAnimationFrame(animatePosition);
  }, [animatePosition]);
  

  return (
    <div id="main" className='absolute'>
      <img src={cat} alt="cat" />
      <a href='https://javascript.info/coordinates' rel="noreferrer" target='_blank'>click here to Learn more about screen coordinates</a>
   </div>
  );
}

export default Test;
