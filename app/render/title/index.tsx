import React from 'react';
import './index.less';

interface IProps {
  text: string;
  styles: React.CSSProperties;
}

const Title = ({ text, styles }: IProps) => {
  return (
    <div style={styles} styleName="title">
      {text}
    </div>
  );
};

export default Title;
