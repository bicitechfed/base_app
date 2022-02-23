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

let IconFormatHorizontalAlignBottom: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M800 896V128h64v768zM640 896V384H576v512zM192 384v512H128V384zM352 896V128h64v768z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFormatHorizontalAlignBottom.defaultProps = {
  size: 18,
};

IconFormatHorizontalAlignBottom = React.memo ? React.memo(IconFormatHorizontalAlignBottom) : IconFormatHorizontalAlignBottom;

export default IconFormatHorizontalAlignBottom;
