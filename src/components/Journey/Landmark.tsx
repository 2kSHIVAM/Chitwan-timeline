import Marker from './Marker';
import CompanyDetails from './CompanyDetails';
import ProgressArrow from './ProgressArrow';

export default function Landmark({ role, jobType, location, date, companyName, companyIcon, companyLocation }: {
  role: string,
  jobType: string,
  location: string,
  date: Date,
  companyName: string,
  companyIcon: string,
  companyLocation: string
}) {
  return (
    <div className={'grid gap-1 h-fit w-fit rounded bg-white px-8 py-4 my-32 border border-gray-300'}>
      <div className={'grid role text-xl font-bold'}>
        {role}
      </div>
      <div className={'grid text-sm text-[#7A9299] font-semibold'}>
        {jobType} • {location}
      </div>
      <Marker type={'landmark'} />
      <CompanyDetails type={'landmark'} date={date} companyName={companyName} companyIcon={companyIcon}
                      companyLocation={companyLocation} />
      <ProgressArrow />
    </div>
  );
}