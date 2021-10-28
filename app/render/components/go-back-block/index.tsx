/*
 * @Author: your name
 * @Date: 2021-10-28 14:49:21
 * @LastEditTime: 2021-10-28 15:22:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/components/go-back-block/index.tsx
 */
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { useHistory } from 'react-router';
import './index.less';

export default function GoBackBlock() {
  const history = useHistory();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const { location } = history;
    if (location?.pathname === '/') {
      setVisible(true);
    }
  }, [history]);

  const handleClick = () => {
    history.goBack();
  };

  return (
    <a styleName={classnames({ none: visible }, 'go-back')} onClick={handleClick}>
      ⬅️
    </a>
  );
}
