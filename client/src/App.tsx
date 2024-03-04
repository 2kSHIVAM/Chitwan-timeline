import React, {useEffect} from 'react';
import {useApi} from "./context/ApiContext";
import {useMe} from "./context/MeContext";
import {TMe} from "./types";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
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
      <Routes>
          <Route path={'/'} element={<Main/>}/>
      </Routes>

  );
}

export default App;
