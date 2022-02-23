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

let IconThumbDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 640h206.08a64 64 0 0 0 62.08-79.552l-96-384A64 64 0 0 0 750.08 128H192a64 64 0 0 0-64 64v320a64 64 0 0 0 64 64h128l128 320h128a64 64 0 0 0 64-64v-192zM384 563.648V192h366.08l96 384H576v256H491.328L384 563.648zM320 512H192V192h128v320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconThumbDown.defaultProps = {
  size: 18,
};

IconThumbDown = React.memo ? React.memo(IconThumbDown) : IconThumbDown;

export default IconThumbDown;
