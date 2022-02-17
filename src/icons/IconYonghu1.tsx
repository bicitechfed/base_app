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

let IconYonghu1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512c106.069333 0 192-85.930667 192-192S618.069333 128 512 128a191.957333 191.957333 0 0 0-192 192C320 426.069333 405.930667 512 512 512z m0 96c-128.170667 0-384 64.341333-384 192V896h768v-96c0-127.658667-255.829333-192-384-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYonghu1.defaultProps = {
  size: 18,
};

IconYonghu1 = React.memo ? React.memo(IconYonghu1) : IconYonghu1;

export default IconYonghu1;
