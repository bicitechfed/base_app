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

let IconCheckRectangle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M689.6 357.248L448 598.848l-113.92-113.92-45.248 45.312L448 689.28l286.848-286.848z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M192 896a64 64 0 0 1-64-64V192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H192z m0-64h640V192H192v640z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCheckRectangle.defaultProps = {
  size: 18,
};

IconCheckRectangle = React.memo ? React.memo(IconCheckRectangle) : IconCheckRectangle;

export default IconCheckRectangle;
