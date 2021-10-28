/*
 * @Author: your name
 * @Date: 2021-10-27 20:47:36
 * @LastEditTime: 2021-10-28 14:45:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/page/root/index.tsx
 */
import React from 'react';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import uniqueId from 'lodash/uniqueId';
import LogoTitle from 'Components/logo-title';
import FooterSourceInfo from 'Components/footer-source-info';
import { navMenu } from 'Common/constants';
import './index.less';

export default function Root() {
  const history = useHistory();

  console.log(history, 'history');

  const showNavMenu = (navArr) => {
    return navArr.map((item) => {
      const { href, path, label, imgUrl } = item || {};
      const handleClick = () => {
        if (href) {
          shell.openExternal(href);
        } else {
          history.push(path);
        }
      };
      return (
        <a key={uniqueId('menu_')} styleName="item-modal" onClick={handleClick}>
          <img src={item?.imgUrl} />
          {item?.label}
        </a>
      );
    });
  };

  return (
    <div styleName="root">
      <div styleName="content">
        <div styleName="slogan-text">
          <span styleName="Zn">让你快一点，让你慢一点</span>
          <span styleName="En"> Make you faster. Make you slower</span>
        </div>
      </div>
      <div styleName="nav-menu">{showNavMenu(navMenu)}</div>
    </div>
  );
}
