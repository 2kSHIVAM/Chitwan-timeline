import Marker from './Marker';
import CompanyDetails from './CompanyDetails';
import LinkPreview from '../LinkPreview';

const RenderMilestone = ({ metaData, type }: { type: string, metaData: any }) => {
  switch (type) {
    case 'link':
        return (
        <div className={'grid grid-rows-[auto_1fr] overflow-hidden gap-1 h-fit w-fit rounded bg-white border border-gray-300'}>
          <LinkPreview link={metaData.link} />
        </div>
      );
    default:
      return (
        <></>
      );
  }
};
export default function Milestone({ content, date }: { content: any[], date: Date }) {

  return (
    <div className={'flex flex-wrap flex-row gap-8 my-12 '}>
      {content.map(({ type, metaData }, index) => (
        <RenderMilestone key={index} type={type} metaData={metaData} />
      ))}
      <Marker type={'milestone'} />
      <CompanyDetails type={'milestone'} companyIcon={''} companyName={''} companyLocation={''}
                      date={date} />
    </div>
  );
}