import Marker from './Marker';

export default function Journey(){
  return(
    <div className={'grid w-full h-fit'}>
      <div className={'grid relative pl-64 w-fit h-screen'}>
        <div style={{
          backgroundImage: "linear-gradient(to bottom, #778FB1 50%, rgba(255, 255, 255, 0) 10%)",
          backgroundPosition: "left",
          backgroundSize: "2px 10px",
          backgroundRepeat: "repeat-y",
        }} className={'grid absolute top-0 left-0 ml-48 h-full w-1'}>
        </div>
        <div className={'grid gap-1 h-fit w-fit rounded bg-white px-8 py-4 border border-gray-500'}>
          <div className={'grid role text-xl font-bold'}>
            Front-end Developer Intern
          </div>
          <div className={'grid text-sm text-[#7A9299] font-semibold'}>
            Full time • Remote
          </div>
          <Marker type={"landmark"}/>
        </div>
      </div>
    </div>
  )
}