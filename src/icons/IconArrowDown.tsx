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

let IconArrowDown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M534.656 128v645.504L768 540.096l45.248 45.248-297.024 297.088a19.2 19.2 0 0 1-27.2 0L192 585.344l45.248-45.248 233.344 233.408V128h64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconArrowDown.defaultProps = {
  size: 18,
};

IconArrowDown = React.memo ? React.memo(IconArrowDown) : IconArrowDown;

export default IconArrowDown;
