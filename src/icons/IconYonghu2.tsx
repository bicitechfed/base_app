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

let IconYonghu2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 224a96.298667 96.298667 0 0 1 96 96A96.298667 96.298667 0 0 1 512 416 96.298667 96.298667 0 0 1 416 320 96.298667 96.298667 0 0 1 512 224m0 480c129.578667 0 278.4 61.909333 288 96H224c11.050667-34.56 158.890667-96 288-96M512 128a191.957333 191.957333 0 0 0-192 192C320 426.069333 405.930667 512 512 512s192-85.930667 192-192S618.069333 128 512 128z m0 480c-128.170667 0-384 64.341333-384 192V896h768v-96c0-127.658667-255.829333-192-384-192z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYonghu2.defaultProps = {
  size: 18,
};

IconYonghu2 = React.memo ? React.memo(IconYonghu2) : IconYonghu2;

export default IconYonghu2;
