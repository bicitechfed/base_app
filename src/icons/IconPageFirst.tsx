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

let IconPageFirst: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M807.04 314.88L748.16 256 462.72 541.44l285.44 285.44 58.88-58.88-226.56-226.56 226.56-226.56zM320 285.44v512h83.2v-512H320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPageFirst.defaultProps = {
  size: 18,
};

IconPageFirst = React.memo ? React.memo(IconPageFirst) : IconPageFirst;

export default IconPageFirst;
