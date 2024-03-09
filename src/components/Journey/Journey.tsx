import Marker from './Marker';
import CompanyDetails from './CompanyDetails';
import { Landmark } from '../../constants/journey';
import ProgressArrow from './ProgressArrow';

export default function Journey(){
  return(
    <div className={'grid w-full h-fit'}>
      <div className={'relative pl-64 w-fit h-screen'}>
        <div style={{
          backgroundImage: "linear-gradient(to bottom, #778FB1 50%, rgba(255, 255, 255, 0) 10%)",
          backgroundPosition: "left",
          backgroundSize: "2px 10px",
          backgroundRepeat: "repeat-y",
        }} className={'grid absolute top-0 left-0 ml-48 h-full w-1'}>
        </div>
        <div className={'flex flex-wrap flex-row gap-8 my-12 '}>
          <div className={'grid gap-1 h-fit w-fit rounded bg-white px-8 py-4 border border-gray-300'}>
            Hello
          </div>
          <div className={'grid gap-1 h-fit w-fit rounded bg-white px-8 py-4 border border-gray-300'}>
            Hello
          </div>
          <Marker type={"milestone"}/>
          <CompanyDetails type={"milestone"} companyIcon={""} companyName={""} companyLocation={""} date={new Date()}/>
        </div>


        {
          Landmark.map(({ role, jobType, location, companyName, companyIcon, companyLocation, date }, index) => (
            <div key={index}
                 className={'grid gap-1 h-fit w-fit rounded bg-white px-8 py-4 my-32 border border-gray-300'}>
              <div className={'grid role text-xl font-bold'}>
                {role}
              </div>
              <div className={'grid text-sm text-[#7A9299] font-semibold'}>
                {jobType} • {location}
              </div>
              <Marker type={"landmark"} />
              <CompanyDetails type={"landmark"} date={date} companyName={companyName} companyIcon={companyIcon}
                              companyLocation={companyLocation} />
              <ProgressArrow />
            </div>
          ))
        }
      </div>
    </div>
  )
}