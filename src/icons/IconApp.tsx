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

let IconApp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M720 128a192 192 0 1 0 0 384 192 192 0 0 0 0-384z m-128 192a128 128 0 1 1 256 0 128 128 0 0 1-256 0zM128 208a64 64 0 0 1 64-64h224a64 64 0 0 1 64 64v224a64 64 0 0 1-64 64H192a64 64 0 0 1-64-64v-224z m64 0v224h224v-224H192zM128 624a64 64 0 0 1 64-64h224a64 64 0 0 1 64 64v224a64 64 0 0 1-64 64H192a64 64 0 0 1-64-64v-224z m64 0v224h224v-224H192zM544 624a64 64 0 0 1 64-64H832a64 64 0 0 1 64 64v224a64 64 0 0 1-64 64H608a64 64 0 0 1-64-64v-224z m64 224H832v-224H608v224z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconApp.defaultProps = {
  size: 18,
};

IconApp = React.memo ? React.memo(IconApp) : IconApp;

export default IconApp;
