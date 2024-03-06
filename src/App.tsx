import React, {useEffect} from 'react';
import {useApi} from "./context/ApiContext";
import {useMe} from "./context/MeContext";
import {TMe} from "./types";
import Main from "./components/Main";
import {Route, Routes} from "react-router-dom";
import { initMixpanel, trackEvent } from './utils';
import { EVENTS } from './constants/events';

function App() {
  const {fetchData} = useApi()
  useEffect(() => {
    let stayTime = 0
    const intervalId = setInterval(() => stayTime++,1000)
    initMixpanel()

    return () => {
      clearInterval(intervalId)
      trackEvent(EVENTS.APP_CLOSE,{
        stayTimeInSec: stayTime
      })
    }

  }, []);
  return (
      <Routes>
          <Route path={'*'} element={<Main/>}/>
      </Routes>

  );
}

export default App;
