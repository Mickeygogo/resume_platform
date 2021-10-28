/*
 * @Author: your name
 * @Date: 2021-10-27 17:00:30
 * @LastEditTime: 2021-10-28 15:16:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/components/logo-title/index.tsx
 */
import React from 'react';
import GoBackBlock from 'Components/go-back-block/index';
import './index.less';

export default function LogoTitle() {
  return (
    <div styleName="logo-title">
      <GoBackBlock />
      <span> Resume Platform </span>
    </div>
  );
}
