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

let IconStopCircle1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M351.872 351.872h320.256v320.256H351.872z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M512 64a448 448 0 1 0 0 896A448 448 0 0 0 512 64z m0 64a384 384 0 1 1 0 768A384 384 0 0 1 512 128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconStopCircle1.defaultProps = {
  size: 18,
};

IconStopCircle1 = React.memo ? React.memo(IconStopCircle1) : IconStopCircle1;

export default IconStopCircle1;
