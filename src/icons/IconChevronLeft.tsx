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

let IconChevronLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M605.44 256l58.816 58.88-226.56 226.56 226.56 226.56-58.88 58.88L320 541.44z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronLeft.defaultProps = {
  size: 18,
};

IconChevronLeft = React.memo ? React.memo(IconChevronLeft) : IconChevronLeft;

export default IconChevronLeft;
