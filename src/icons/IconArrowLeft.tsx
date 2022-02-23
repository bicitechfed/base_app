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

let IconArrowLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M242.56 534.592L475.904 768l-45.248 45.248-297.024-297.024a19.2 19.2 0 0 1 0-27.2L430.656 192l45.248 45.248L242.56 470.592h645.504v64H242.56z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconArrowLeft.defaultProps = {
  size: 18,
};

IconArrowLeft = React.memo ? React.memo(IconArrowLeft) : IconArrowLeft;

export default IconArrowLeft;
