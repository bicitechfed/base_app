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

let IconChakanguicheng: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M854.613333 288.597333L639.402667 73.386667a31.957333 31.957333 0 0 0-22.613334-9.386667H192a32 32 0 0 0-32 32v832c0 17.706667 14.293333 32 32 32h640a32 32 0 0 0 32-32V311.296c0-8.533333-3.413333-16.682667-9.386667-22.698667z m-64.426666 37.418667h-188.16V137.813333l188.16 188.16z m1.834666 561.962667H232.021333V136.021333h301.994667V352c0 23.210667 18.773333 41.984 41.984 41.984h216.021333v494.037333z m-263.936-416h-32.170666a11.861333 11.861333 0 0 0-11.605334 9.130666l-49.706666 198.912-46.08-198.741333a12.074667 12.074667 0 0 0-11.733334-9.258667h-35.413333a12.032 12.032 0 0 0-11.605333 15.104l74.24 275.968a12.074667 12.074667 0 0 0 11.605333 8.917334h32a11.946667 11.946667 0 0 0 11.562667-8.917334L512 566.101333l52.821333 196.992a12.074667 12.074667 0 0 0 11.562667 8.917334h31.829333a11.946667 11.946667 0 0 0 11.605334-8.917334l74.368-276.010666a12.032 12.032 0 0 0-11.605334-15.104h-35.584a12.074667 12.074667 0 0 0-11.690666 9.301333l-45.824 199.125333-49.792-199.296a11.861333 11.861333 0 0 0-11.605334-9.088z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconChakanguicheng.defaultProps = {
  size: 18,
};

IconChakanguicheng = React.memo ? React.memo(IconChakanguicheng) : IconChakanguicheng;

export default IconChakanguicheng;
