import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {AppWrapper} from "./context";
import RandomBlob from "./components/RandomBlob";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <AppWrapper>
        <div className={"grid w-screen relative min-h-screen bg-gray-50"}>
            <App/>
            <section className={'grid blur-blob overflow-hidden w-full h-full absolute top-0 left-0'}>
                <RandomBlob/>
                <RandomBlob/>
                <RandomBlob/>
                <RandomBlob/>
                <RandomBlob/>
            </section>
        </div>
    </AppWrapper>
);
