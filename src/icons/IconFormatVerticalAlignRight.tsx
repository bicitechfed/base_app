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

let IconFormatVerticalAlignRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192h768V128H128v64z m192 224h576v-64H320v64z m576 448H320v-64h576v64zM128 640h768V576H128v64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFormatVerticalAlignRight.defaultProps = {
  size: 18,
};

IconFormatVerticalAlignRight = React.memo ? React.memo(IconFormatVerticalAlignRight) : IconFormatVerticalAlignRight;

export default IconFormatVerticalAlignRight;
