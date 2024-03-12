import useFetchLinkMeta from '../hooks/useFetchLinkMeta';
import { createRef, useEffect, useState } from 'react';
import Loading from './Loading';

export default function LinkPreview({ link }: { link: string }) {
  const { loading, data } = useFetchLinkMeta(link);
  const imageRef = createRef<HTMLImageElement>();
  const [imageLoading, setImageLoading] = useState(true);

  const handleLoadEnd = () => {
    console.log('loading ended');
    setImageLoading(false);
  };

  useEffect(() => {
    const elem = imageRef.current;
    if (elem) {
      elem.addEventListener('load', handleLoadEnd);
    }
    return () => {
      elem?.removeEventListener('load', handleLoadEnd);
    };
  }, [imageRef]);

  return (
    data && (
      <>
        <div className={'grid relative'}>
          <img ref={imageRef} loading={'lazy'} className={'w-[300px]'} src={data.image} alt={data.title} />
          {
            imageLoading && (
              <div className={'absolute grid top-0 left-0 h-[230px] w-full bg-gray-100'}>
                <Loading />
              </div>
            )
          }
        </div>
        <div className={'grid grid-rows-[auto_1fr] gap-1 my-[8px] w-[300px]'}>
          <div className={'font-bold text-xl px-4 truncate'}>
            {data.title}
          </div>
          <div className={'text-gray-400 text-sm px-4 grid'}>
            <div className={'truncate'}>
              {data.description}
            </div>
          </div>
        </div>
      </>
    )
  );
}