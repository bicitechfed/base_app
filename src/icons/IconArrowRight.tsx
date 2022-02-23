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

let IconArrowRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M773.504 470.592L540.096 237.248 585.344 192l297.088 297.024a19.2 19.2 0 0 1 0 27.2l-297.088 296.96L540.16 768l233.408-233.408H128v-64h645.504z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconArrowRight.defaultProps = {
  size: 18,
};

IconArrowRight = React.memo ? React.memo(IconArrowRight) : IconArrowRight;

export default IconArrowRight;
