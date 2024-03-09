import { useEffect, useRef } from 'react';
import { ChevronUp } from 'react-feather';

export default function ProgressArrow(){
  const arrowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elem = arrowRef.current
    if(elem){
      const clientW = elem.offsetWidth
      elem.style.marginLeft = `calc(-6rem - ${clientW/2}px)`
    }

  }, []);

  return(
    <div ref={arrowRef} className={'w-[24px] h-[24px] absolute self-center -mt-40'}>
      <ChevronUp/>
    </div>
  )
}