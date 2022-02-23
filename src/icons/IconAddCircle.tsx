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

let IconAddCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 544h-192v-64h192v-192h64v192h192v64h-192v192h-64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896z m0-64A384 384 0 1 1 512 128a384 384 0 0 1 0 768z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconAddCircle.defaultProps = {
  size: 18,
};

IconAddCircle = React.memo ? React.memo(IconAddCircle) : IconAddCircle;

export default IconAddCircle;
