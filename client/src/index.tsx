import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppWrapper} from "./context";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppWrapper>
        <div className={"grid w-screen relative h-screen bg-black"}>
            <App/>
        </div>
    </AppWrapper>
);
