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

let IconUnfoldLess: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M304.32 128l233.216 235.904L770.816 128l45.504 44.992-251.456 254.336a38.4 38.4 0 0 1-54.592 0l-251.52-254.336L304.384 128zM301.248 877.12L537.6 640.832l236.352 236.288 45.248-45.248-254.4-254.4a38.4 38.4 0 0 0-54.336 0L256 831.872l45.248 45.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconUnfoldLess.defaultProps = {
  size: 18,
};

IconUnfoldLess = React.memo ? React.memo(IconUnfoldLess) : IconUnfoldLess;

export default IconUnfoldLess;
