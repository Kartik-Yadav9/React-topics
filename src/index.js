import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Dynamic from './Reducer/Dynamic';
import ThemeValue from './Context-api/ThemeValue.';
import Todos from './useReducer & C API/Todos';
import App from './Todo Crud/App'
import Practice from './Module css/Practice';
import UseRef from './UseRef';
import UseEffect from './UseEffect';
import UseReducer2 from './UseReducer2';

import UseMemo from './UseMemo';
import UseCallback from './Use Callback/UseCallback';
import Counter from './Custom Hook/Counter';
import AxiosApp from './Axios crud/AxiosApp';

import AppRedux from './Redux-Toolkit/AppRedux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import { store } from './Redux-Toolkit/store';
import Approute from './Routerexam/Approute';
import Functional from './Life Cycle/Functional';
import PswdGenerator from './Useref callback/PswdGenerator';
import Session from './storage/Session';
import Jwt from './Jwt Token/Jwt';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* <ThemeValue/> */}

    {/* <UseReducer2/> */}
    {/* <UseEffect/> */}
    {/* <UseRef/> */}
    {/* <App/> */}
    {/* <Practice/> */}

    {/* <Todos/> */}
    

    {/* <Functional/> */}

    {/* <UseCallback/> */}

    {/* <Counter/> */}

{/*     
<QueryClientProvider>
    <AxiosApp/>
</QueryClientProvider> */}
    

   
    {/* <Provider store={store}>
    <AppRedux />
  </Provider>, */}

  {/* <PswdGenerator/> */}
   
      {/* <UseMemo/> */}
      

      {/* <UseCallback/> */}

      {/* <Session/> */}

      <Jwt/>

  </React.StrictMode>
 
    // <BrowserRouter>
    //   <Approute/>
    // </BrowserRouter>
  
)


