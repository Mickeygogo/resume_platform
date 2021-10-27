/*
 * @Author: your name
 * @Date: 2021-10-27 18:02:17
 * @LastEditTime: 2021-10-27 19:06:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/components/footer-source-info/index.tsx
 */
import React from 'react';
import './index.less';

export default function FooterSourceInfo() {
  return <div styleName="footer-source-info">Copyright © 2021-{new Date().getFullYear()} All Rights Reserved. Copyright By Mickey_wang</div>;
}
