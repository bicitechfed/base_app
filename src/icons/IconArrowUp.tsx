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

let IconArrowUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M470.592 242.56L237.248 475.904 192 430.72l297.024-297.024a19.2 19.2 0 0 1 27.2 0l296.96 297.024-45.184 45.248L534.592 242.56v645.504h-64V242.56z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconArrowUp.defaultProps = {
  size: 18,
};

IconArrowUp = React.memo ? React.memo(IconArrowUp) : IconArrowUp;

export default IconArrowUp;
