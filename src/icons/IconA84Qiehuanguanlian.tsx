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

let IconA84Qiehuanguanlian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M309.333333 544v-98.602667L171.221333 597.333333 309.333333 749.226667V650.666667H576v64h-202.666667v144.917333a21.333333 21.333333 0 0 1-37.12 14.357333L110.848 626.048a42.666667 42.666667 0 0 1 0-57.408L336.213333 320.725333a21.333333 21.333333 0 0 1 37.12 14.357334v144.896l138.666667 0.021333h202.090667v98.56L852.202667 426.666667l-138.069334-151.872-0.021333 98.538666h-266.666667v-64h202.666667V164.416a21.333333 21.333333 0 0 1 37.12-14.357333l225.365333 247.893333a42.666667 42.666667 0 0 1 0 57.408l-225.365333 247.893333a21.333333 21.333333 0 0 1-37.12-14.336V544H309.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconA84Qiehuanguanlian.defaultProps = {
  size: 18,
};

IconA84Qiehuanguanlian = React.memo ? React.memo(IconA84Qiehuanguanlian) : IconA84Qiehuanguanlian;

export default IconA84Qiehuanguanlian;
