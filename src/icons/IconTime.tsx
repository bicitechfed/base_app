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

let IconTime: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 256v280.896L640 704l45.248-45.248L544 510.4V256z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M960 512A448 448 0 1 1 64 512a448 448 0 0 1 896 0z m-64 0A384 384 0 1 0 128 512a384 384 0 0 0 768 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconTime.defaultProps = {
  size: 18,
};

IconTime = React.memo ? React.memo(IconTime) : IconTime;

export default IconTime;
