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

let IconJiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M252.68392 916.293506l404.452699-405.218869L253.02444 107.898888A63.166471 63.166471 0 0 1 342.410955 18.512373l448.635177 447.869006c24.687704 24.687704 24.687704 64.528551 0 89.301385l-449.060827 449.826997a62.996211 62.996211 0 1 1-89.216255-89.131125z"
        fill={getIconColor(color, 0, '#222222')}
      />
    </Svg>
  );
};

IconJiantou.defaultProps = {
  size: 18,
};

IconJiantou = React.memo ? React.memo(IconJiantou) : IconJiantou;

export default IconJiantou;
