/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconFuxuankuang0: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896.384 0C966.848 0 1024 57.28 1024 127.616v768.768A127.68 127.68 0 0 1 896.384 1024H127.616A127.68 127.68 0 0 1 0 896.384V127.616C0 57.152 57.28 0 127.616 0h768.768z m0 64H127.616a63.744 63.744 0 0 0-63.168 56.192L64 127.616v768.768c0 32.576 24.576 59.52 56.192 63.168l7.424 0.448h768.768c32.576 0 59.52-24.576 63.168-56.192l0.448-7.424V127.616a63.744 63.744 0 0 0-56.192-63.168L896.384 64z"
        fill={getIconColor(color, 0, '#D4D4D4')}
      />
    </Svg>
  );
};

IconFuxuankuang0.defaultProps = {
  size: 18,
};

IconFuxuankuang0 = React.memo ? React.memo(IconFuxuankuang0) : IconFuxuankuang0;

export default IconFuxuankuang0;
