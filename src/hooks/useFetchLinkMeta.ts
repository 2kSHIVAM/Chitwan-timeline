import { useEffect, useState } from 'react';
import axios from 'axios';

type PreviewType =  {
  image:string,
  title:string,
  description:string
}

export default function useFetchLinkMeta(link: string ) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<null| PreviewType>(null);

  useEffect(() => {
    const fetchMeta = async () => {
      setLoading(true);
      const res = await axios.post("https://api.linkpreview.net",{
        q: link
      },{
        headers:{
          'X-Linkpreview-Api-Key': '0e81645653d428392c92abfea824632c',
        }
      });
      setLoading(false)
      setData(res.data as unknown as PreviewType)
    };
    fetchMeta()
  }, [link]);
  return { loading, data };
}