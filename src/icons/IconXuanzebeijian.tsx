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

let IconXuanzebeijian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M72.471273 8.843636h390.050909v931.700364c0 35.886545-29.137455 64.977455-65.024 64.977455H7.447273V73.821091C7.447273 37.934545 36.631273 8.843636 72.517818 8.843636z m541.696 0h390.050909v390.004364c0 35.886545-29.137455 65.024-65.024 65.024h-390.050909v-390.050909c0-35.886545 29.137455-64.977455 65.024-64.977455z m0 541.696h390.050909v390.004364c0 35.886545-29.137455 64.977455-65.024 64.977455h-390.050909v-390.004364c0-35.886545 29.137455-64.977455 65.024-64.977455z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

IconXuanzebeijian.defaultProps = {
  size: 18,
};

IconXuanzebeijian = React.memo ? React.memo(IconXuanzebeijian) : IconXuanzebeijian;

export default IconXuanzebeijian;
