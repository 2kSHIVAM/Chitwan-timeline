import { useEffect, useRef } from 'react';

export default function CompanyDetails({type, companyIcon, companyName, companyLocation,date }: {
  type: string,
  companyIcon: string,
  companyName: string,
  companyLocation: string,
  date: Date
}) {
  const companyWrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const elem = companyWrapperRef.current;
    if (elem) {
      const clientW = elem.offsetWidth;
      let ml = ""
      if(type === "landmark"){
        ml = `calc(-6rem - ${clientW + 16}px)`
      }else{
        ml = `calc(-4rem - ${clientW + 16}px)`
      }
      elem.style.marginLeft = ml;
    }
  }, []);
  const RenderMonthAndYear = () => {
    const monthNames = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul",
      "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    if(date){
      let month = monthNames[date.getMonth()]
      let year = date.getFullYear()
      return(
        <>{type === "landmark" && "Joined "}{month} {year}</>
      )
    }else{
      return(
        <></>
      )
    }
  }
  return (
    <div ref={companyWrapperRef} className={'grid absolute w-fit h-fit self-center'}>
      <div className={'grid grid-rows-[auto_1fr] gap-1 pr-6'}>
        {type === "landmark" && (
          <div className={'grid w-[65px] h-[65px] justify-self-end border rounded-full overflow-hidden'}>
            <img src={companyIcon} alt={companyName} className={'w-[65px] h-[65px] place-self-center'} />
          </div>
        )}
        <div className={'grid grid-rows-[auto_1fr]'}>
          <div className={'grid text-xl justify-self-end font-bold uppercase'}>{companyName}</div>
          <div className={'grid justify-self-end text-[#7A9299] text-sm'}>
            <div className={'grid justify-self-end'}>{companyLocation}</div>
            <div className={'grid justify-self-end'}><RenderMonthAndYear/></div>
          </div>
        </div>
      </div>
    </div>
  );
}