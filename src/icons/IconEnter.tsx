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

let IconEnter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 192v384H237.248l105.408-105.344-45.312-45.312-160 160a32 32 0 0 0 0 45.312l160 160 45.312-45.312L237.248 640H800a64 64 0 0 0 64-64V192h-64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconEnter.defaultProps = {
  size: 18,
};

IconEnter = React.memo ? React.memo(IconEnter) : IconEnter;

export default IconEnter;
