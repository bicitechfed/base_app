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

let IconErrorCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 256v352h-64V256zM550.016 672h-76.8v76.8h76.8z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0z m-64 0A384 384 0 1 1 128 512a384 384 0 0 1 768 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconErrorCircle.defaultProps = {
  size: 18,
};

IconErrorCircle = React.memo ? React.memo(IconErrorCircle) : IconErrorCircle;

export default IconErrorCircle;
