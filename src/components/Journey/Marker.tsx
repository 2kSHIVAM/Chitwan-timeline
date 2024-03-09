import { useEffect, useRef } from 'react';

export default function Marker({type}:{type:string}){
  const markerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elem = markerRef.current
    if(elem){
      const clientW = elem.offsetWidth
      let ml = ""
      if(type === "landmark"){
        ml = `calc(-6rem - ${clientW/2}px)`
      }else{
        ml = `calc(-4rem - ${clientW/2}px)`
      }
      elem.style.marginLeft = ml
    }

  }, [type]);

  return(
    <div ref={markerRef} className={`grid absolute bg-white self-center rounded-full ${type === "landmark" ? 'w-[28px] h-[27px] border-8 border-[#0066FF]' : 'w-[16px] h-[16px] border-2 border-[#0066FF]'}`}></div>
  )
}