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

let IconFullsreen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 301.248V480H192v-256a32 32 0 0 1 32-32h256v64H301.248l201.408 201.344-45.312 45.312L256 301.248zM832 786.752V608h64v256a32 32 0 0 1-32 32h-256v-64h178.752L585.344 630.656l45.312-45.312L832 786.752z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFullsreen.defaultProps = {
  size: 18,
};

IconFullsreen = React.memo ? React.memo(IconFullsreen) : IconFullsreen;

export default IconFullsreen;
