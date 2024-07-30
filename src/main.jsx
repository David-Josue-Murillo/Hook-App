import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { HooksApp } from './HooksApp';
//import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
import { SimpleForm } from './useEffect/SimpleForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SimpleForm />
  </React.StrictMode>,
)
