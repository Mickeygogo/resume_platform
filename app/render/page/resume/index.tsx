/*
 * @Author: your name
 * @Date: 2021-10-26 21:55:58
 * @LastEditTime: 2021-10-29 16:18:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/page/resume/index.tsx
 */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Resume() {
  const appName = useSelector((state) => state.globalModal.login);
  const dispatch = useDispatch();

  useEffect(() => {

  }, []);

  return <div>这里是简历制作的平台</div>;
}
