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

let IconDesktop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 704h320v128H224v64h640v-64H576v-128h320a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v448a64 64 0 0 0 64 64z m0-512h704v448H192V192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconDesktop.defaultProps = {
  size: 18,
};

IconDesktop = React.memo ? React.memo(IconDesktop) : IconDesktop;

export default IconDesktop;
