import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { Sepolia } from "@thirdweb-dev/chains";

import { StateContextProvider } from './context';

import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const privateKey = process.env.REACT_APP_PRIVATE_KEY;

root.render(
    <ThirdwebProvider activeChain={Sepolia} clientId={privateKey}> 
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)
{/*using sepolia !!*/}