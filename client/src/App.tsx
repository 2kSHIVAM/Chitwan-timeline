import React, {useEffect} from 'react';
import {useApi} from "./context/ApiContext";
import {useMe} from "./context/MeContext";
import {TMe} from "./types";
function App() {
  const {fetchData} = useApi()
  const {me,updateMe} = useMe()
  useEffect(() => {
    fetchData({
      url:'me',
      method:'GET'
    }).then((res) => {
      updateMe((res as TMe).data as unknown as TMe)
    })
  }, []);
  return (
      <div className={'text-white'}>{me.greeting}</div>
  );
}

export default App;
