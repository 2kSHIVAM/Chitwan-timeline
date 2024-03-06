import { useEffect, useRef } from 'react';

export default function Marker({type}:{type:string}){
  const markerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elem = markerRef.current
    if(elem){
      const clientW = elem.offsetWidth
      elem.style.marginLeft = `calc(-6rem - ${clientW/2}px)`
    }

  }, [type]);

  return(
    <div ref={markerRef} className={`grid absolute bg-white self-center rounded-full ${type === "landmark" ? 'w-[28px] h-[27px] border-8 border-[#0066FF]' : 'w-[10px] h-[10px]'}`}></div>
  )
}