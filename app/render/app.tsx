/*
 * @Author: your name
 * @Date: 2021-10-25 13:56:28
 * @LastEditTime: 2021-10-29 11:03:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/app.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'Store';
import RouterPage from 'Common/route/router';

function App() {
  return (
    <Provider store={store}>
      <RouterPage />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
