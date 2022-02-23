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

let IconFormatVerticalAlignCenter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192h768V128H128zM256 416h512v-64H256zM768 864H256v-64h512zM128 640h768V576H128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFormatVerticalAlignCenter.defaultProps = {
  size: 18,
};

IconFormatVerticalAlignCenter = React.memo ? React.memo(IconFormatVerticalAlignCenter) : IconFormatVerticalAlignCenter;

export default IconFormatVerticalAlignCenter;
