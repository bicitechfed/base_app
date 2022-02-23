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

let IconPageLast: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 314.88L314.88 256l285.376 285.44-285.44 285.44L256 768l226.56-226.56L256 314.88z m487.04-29.44v512h-83.2v-512h83.2z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPageLast.defaultProps = {
  size: 18,
};

IconPageLast = React.memo ? React.memo(IconPageLast) : IconPageLast;

export default IconPageLast;
