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

let IconFormatHorizontalAlignCenter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 896V128h64v768zM640 768V256H576v512zM192 256v512H128V256zM352 896V128h64v768z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFormatHorizontalAlignCenter.defaultProps = {
  size: 18,
};

IconFormatHorizontalAlignCenter = React.memo ? React.memo(IconFormatHorizontalAlignCenter) : IconFormatHorizontalAlignCenter;

export default IconFormatHorizontalAlignCenter;
