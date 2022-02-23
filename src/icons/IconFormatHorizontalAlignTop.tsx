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

let IconFormatHorizontalAlignTop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 128v576h64V128zM576 704V128h64v576zM800 896V128h64v768zM352 896V128h64v768z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFormatHorizontalAlignTop.defaultProps = {
  size: 18,
};

IconFormatHorizontalAlignTop = React.memo ? React.memo(IconFormatHorizontalAlignTop) : IconFormatHorizontalAlignTop;

export default IconFormatHorizontalAlignTop;
