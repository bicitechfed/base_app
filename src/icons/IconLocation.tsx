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

let IconLocation: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M672.896 379.072a160 160 0 1 1-320 0 160 160 0 0 1 320 0z m-64 0a96 96 0 1 0-192 0 96 96 0 0 0 192 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M536.064 921.088a28.032 28.032 0 0 1-46.336 0L247.616 565.44a320.896 320.896 0 1 1 530.56 0l-242.112 355.648z m189.184-391.68a256.896 256.896 0 1 0-424.704 0l212.352 311.936 212.352-311.936z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLocation.defaultProps = {
  size: 18,
};

IconLocation = React.memo ? React.memo(IconLocation) : IconLocation;

export default IconLocation;
