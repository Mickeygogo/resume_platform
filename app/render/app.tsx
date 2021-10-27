/*
 * @Author: your name
 * @Date: 2021-10-25 13:56:28
 * @LastEditTime: 2021-10-27 20:09:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/app.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom';
import RouterPage from './common/route/router';

function App() {
  return <RouterPage />;
}

ReactDOM.render(<App />, document.getElementById('root'));
