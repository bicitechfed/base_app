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

let IconXiaoxi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 128a42.666667 42.666667 0 0 1 42.666667 42.666667v554.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H256l-170.666667 170.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h768zM341.333333 384h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333334 21.333333h42.666666a21.333333 21.333333 0 0 0 21.333334-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333334-21.333333z m192 0h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333334 21.333333h42.666666a21.333333 21.333333 0 0 0 21.333334-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333334-21.333333z m192 0h-42.666666a21.333333 21.333333 0 0 0-21.333334 21.333333v42.666667a21.333333 21.333333 0 0 0 21.333334 21.333333h42.666666a21.333333 21.333333 0 0 0 21.333334-21.333333v-42.666667a21.333333 21.333333 0 0 0-21.333334-21.333333z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconXiaoxi.defaultProps = {
  size: 18,
};

IconXiaoxi = React.memo ? React.memo(IconXiaoxi) : IconXiaoxi;

export default IconXiaoxi;
