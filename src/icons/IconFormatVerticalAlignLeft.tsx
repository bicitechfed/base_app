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

let IconFormatVerticalAlignLeft: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192h768V128H128zM128 416h576v-64H128zM704 864H128v-64h576zM128 640h768V576H128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFormatVerticalAlignLeft.defaultProps = {
  size: 18,
};

IconFormatVerticalAlignLeft = React.memo ? React.memo(IconFormatVerticalAlignLeft) : IconFormatVerticalAlignLeft;

export default IconFormatVerticalAlignLeft;
