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

let IconShanchu1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 0C227.84 0 0 227.84 0 512c0 284.16 227.84 512 512 512 284.096 0 512-227.84 512-512 0-284.16-227.904-512-512-512z"
        fill={getIconColor(color, 0, '#E02020')}
      />
      <Path
        d="M768 696.32L696.256 768 512 583.68 327.616 768 256 696.32 440.256 512 256 327.68 327.616 256 512 440.32 696.256 256 768 327.68 583.616 512z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconShanchu1.defaultProps = {
  size: 18,
};

IconShanchu1 = React.memo ? React.memo(IconShanchu1) : IconShanchu1;

export default IconShanchu1;
