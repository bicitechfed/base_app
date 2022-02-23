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

let IconClear: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M448 256h128V128H448v128z m192-128v128h192a64 64 0 0 1 64 64v128a64 64 0 0 1-54.976 63.36l44.544 311.616a64 64 0 0 1-63.36 73.024H201.792a64 64 0 0 1-63.36-73.024L183.04 511.36A64 64 0 0 1 128 448V320a64 64 0 0 1 64-64h192V128a64 64 0 0 1 64-64h128a64 64 0 0 1 64 64z m136.512 320H832V320H192v128h584.512z m0 64H247.488l-45.696 320H320v-128h64v128h96v-128h64v128H640v-128h64v128h118.208l-45.696-320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconClear.defaultProps = {
  size: 18,
};

IconClear = React.memo ? React.memo(IconClear) : IconClear;

export default IconClear;
