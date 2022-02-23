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

let IconMoneyCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M672 480h-128v64h128v64h-128V768h-64V608h-128v-64h128v-64h-128v-64h93.44L359.04 307.968l49.92-39.936L512 396.8l103.04-128.768 49.92 39.936L578.56 416h93.44z"
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

IconMoneyCircle.defaultProps = {
  size: 18,
};

IconMoneyCircle = React.memo ? React.memo(IconMoneyCircle) : IconMoneyCircle;

export default IconMoneyCircle;
