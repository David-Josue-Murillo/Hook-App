import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import { HooksApp } from './HooksApp';
//import { CounterWithCustomHook } from './useState/CounterWithCustomHook';
//import { SimpleForm } from './02-useEffect/SimpleForm';
//import { FormWithCustomHook} from './02-useEffect/FormWithCustomHook'
//import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
//import { FocusScreen } from './04-useRef/FocusScreen';
//import { Layout } from './05-useLayoutEffect/Layout';
//import { Memorize } from './06-memos/Memorize';
//import { MemoHook } from './06-memos/MemoHook';
//import { CallbackHook } from './06-memos/CallbackHook';
//import { Padre } from './07-tarea-memo/Padre';
import './08-useReducer/intro-reduces';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <intro-reduces />
  </React.StrictMode>,
)
