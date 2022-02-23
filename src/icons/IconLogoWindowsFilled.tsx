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

let IconLogoWindowsFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 192H192v320h320zM896 192H576v320h320zM576 576h320v320H576zM512 576H192v320h320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoWindowsFilled.defaultProps = {
  size: 18,
};

IconLogoWindowsFilled = React.memo ? React.memo(IconLogoWindowsFilled) : IconLogoWindowsFilled;

export default IconLogoWindowsFilled;
