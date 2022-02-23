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

let IconInfoCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480.384 768V416h64V768zM550.4 256H473.6v76.8h76.8z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M64 512a448 448 0 1 0 896 0A448 448 0 0 0 64 512z m64 0a384 384 0 1 1 768 0A384 384 0 0 1 128 512z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconInfoCircle.defaultProps = {
  size: 18,
};

IconInfoCircle = React.memo ? React.memo(IconInfoCircle) : IconInfoCircle;

export default IconInfoCircle;
