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

let IconChevronUpRectangle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M333.248 626.752L512 448l178.752 178.752 45.248-45.248-224-224-224 224z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H192a64 64 0 0 1-64-64V192z m64 0v640h640V192H192z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronUpRectangle.defaultProps = {
  size: 18,
};

IconChevronUpRectangle = React.memo ? React.memo(IconChevronUpRectangle) : IconChevronUpRectangle;

export default IconChevronUpRectangle;
