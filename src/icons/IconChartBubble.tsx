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

let IconChartBubble: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576 384a192 192 0 1 1-384 0 192 192 0 0 1 384 0zM512 384a128 128 0 1 0-256 0 128 128 0 0 0 256 0zM896 672a160 160 0 1 1-320 0 160 160 0 0 1 320 0z m-64 0a96 96 0 1 0-192 0 96 96 0 0 0 192 0zM320 800a96 96 0 1 1-192 0 96 96 0 0 1 192 0zM832 320a64 64 0 1 0 0-128 64 64 0 0 0 0 128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChartBubble.defaultProps = {
  size: 18,
};

IconChartBubble = React.memo ? React.memo(IconChartBubble) : IconChartBubble;

export default IconChartBubble;
