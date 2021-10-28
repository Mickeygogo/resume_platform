/*
 * @Author: your name
 * @Date: 2021-10-27 19:13:35
 * @LastEditTime: 2021-10-28 15:15:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/components/general-layout/index.tsx
 */
import React from 'react';
import FooterSourceInfo from 'Components/footer-source-info/index';
import LogoTitle from 'Components/logo-title';
import './index.less';

export default function GeneralLayout(props) {
  return (
    <div styleName="general-layout">
      <LogoTitle />
      <div styleName="contents">{props?.children}</div>
      <FooterSourceInfo />
    </div>
  );
}
