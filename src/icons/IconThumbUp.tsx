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

let IconThumbUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 384h206.08a64 64 0 0 1 62.08 79.552l-96 384a64 64 0 0 1-62.08 48.448H192a64 64 0 0 1-64-64V512a64 64 0 0 1 64-64h128l128-320h128a64 64 0 0 1 64 64v192zM384 460.352V832h366.08l96-384H576V192H491.328L384 460.352zM320 512H192v320h128V512z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconThumbUp.defaultProps = {
  size: 18,
};

IconThumbUp = React.memo ? React.memo(IconThumbUp) : IconThumbUp;

export default IconThumbUp;
