import Marker from './Marker';
import CompanyDetails from './CompanyDetails';
import { Landmarks, Milestones } from '../../constants/journey';
import ProgressArrow from './ProgressArrow';
import Landmark from './Landmark';
import Milestone from './Milestone';

export default function Journey() {
  return (
    <div className={'grid w-full h-fit'}>
      <div className={'relative pl-64 w-fit h-screen'}>
        <div style={{
          backgroundImage: 'linear-gradient(to bottom, #778FB1 50%, rgba(255, 255, 255, 0) 10%)',
          backgroundPosition: 'left',
          backgroundSize: '2px 10px',
          backgroundRepeat: 'repeat-y',
        }} className={'grid absolute top-0 left-0 ml-48 h-full w-1'}>
        </div>

        {
          Milestones.map(({ date, content }, index) => (
            <Milestone key={index} date={date} content={content}/>
          ))
        }


        {
          Landmarks.map(({ role, jobType, location, companyName, companyIcon, companyLocation, date }, index) => (
            <Landmark key={index} role={role} jobType={jobType} location={location} companyName={companyName}
                       companyIcon={companyIcon} companyLocation={companyLocation} date={date} />
          ))
        }
      </div>
    </div>
  );
}