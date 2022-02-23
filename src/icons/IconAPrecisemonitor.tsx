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

let IconAPrecisemonitor: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64v224h64V64H512zM430.848 321.6L204.608 95.36l-45.248 45.248 226.24 226.24 45.248-45.248z m226.304 0l226.24-226.24 45.248 45.248-226.24 226.24-45.248-45.248zM608 480a64 64 0 0 1-119.424 32H128V448h360.576a64 64 0 0 1 119.424 32zM385.6 593.152L159.36 819.392l45.248 45.248 226.24-226.24-45.248-45.248z m316.8 0l226.24 226.24-45.248 45.248-226.24-226.24 45.248-45.248zM960 448h-224v64H960V448z m-448 448v-224h64V896H512z"
        fill={getIconColor(color, 0, '#000000')}
        opacity=".9"
      />
    </Svg>
  );
};

IconAPrecisemonitor.defaultProps = {
  size: 18,
};

IconAPrecisemonitor = React.memo ? React.memo(IconAPrecisemonitor) : IconAPrecisemonitor;

export default IconAPrecisemonitor;
