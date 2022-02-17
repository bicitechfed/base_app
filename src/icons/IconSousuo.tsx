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

let IconSousuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M991.004444 869.034667l-207.644444-207.644445a89.031111 89.031111 0 0 0-27.079111-18.033778 409.144889 409.144889 0 0 0 68.664889-226.986666A411.136 411.136 0 0 0 413.752889 5.233778 411.136 411.136 0 0 0 2.616889 416.369778a411.136 411.136 0 0 0 411.136 411.136 409.429333 409.429333 0 0 0 227.043555-68.664889c4.209778 9.784889 9.955556 19.114667 17.92 27.079111l207.701334 207.644444a88.064 88.064 0 1 0 124.586666-124.529777zM413.752889 710.030222a293.660444 293.660444 0 1 1 0-587.320889 293.603556 293.603556 0 1 1 0 587.320889z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconSousuo.defaultProps = {
  size: 18,
};

IconSousuo = React.memo ? React.memo(IconSousuo) : IconSousuo;

export default IconSousuo;
