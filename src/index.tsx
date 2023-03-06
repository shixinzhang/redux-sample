import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

//1.redux
import ReduxTodoApp from './redux/ReduxTodoApp';
// import store from './redux/store';

//2.redux-toolkit
import ToolkitTodoApp from './redux-toolkit/ToolkitTodoApp';
// import store from './redux-toolkit/store';

//3.rematch
import RematchTodoApp from './rematch/RematchTodoApp';
import { store } from './rematch/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

//5.分发给子元素
root.render(
  <Provider store={store}>
    {/* <ReduxTodoApp/> */}
    {/* <ToolkitTodoApp/> */}
    <RematchTodoApp/>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
