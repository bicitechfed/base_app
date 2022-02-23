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

let IconCart: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 192h100.864l88.896 533.248a51.2 51.2 0 0 0 50.56 42.752H896v-64H315.136L293.76 576h552.576A51.2 51.2 0 0 0 896 537.216l54.4-217.6A51.2 51.2 0 0 0 900.736 256H240.448l-14.208-85.248A51.2 51.2 0 0 0 175.68 128H64v64z m772.352 320H283.136l-32-192h633.216l-48 192zM304 928a48 48 0 1 0 0-96 48 48 0 0 0 0 96zM820.032 928a48 48 0 1 0 0-96 48 48 0 0 0 0 96z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCart.defaultProps = {
  size: 18,
};

IconCart = React.memo ? React.memo(IconCart) : IconCart;

export default IconCart;
