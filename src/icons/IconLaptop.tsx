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

let IconLaptop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M160 768a64 64 0 0 1-64-64V256a64 64 0 0 1 64-64h704a64 64 0 0 1 64 64v448a64 64 0 0 1-64 64h-704z m0-64h704V256h-704v448zM960 832H64v64h896z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLaptop.defaultProps = {
  size: 18,
};

IconLaptop = React.memo ? React.memo(IconLaptop) : IconLaptop;

export default IconLaptop;
