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

let IconAOrderAdjustmentcolumn: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M471.104 544V960h64V544h298.048l-108.288 108.224 45.248 45.312 162.88-162.88a32 32 0 0 0 0-45.312l-162.88-162.88-45.248 45.312L833.152 480H535.04V64h-64v416H173.248L281.6 371.776 236.16 326.4 73.344 489.344a32 32 0 0 0 0 45.312l162.88 162.88 45.312-45.248L173.248 544h297.856z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconAOrderAdjustmentcolumn.defaultProps = {
  size: 18,
};

IconAOrderAdjustmentcolumn = React.memo ? React.memo(IconAOrderAdjustmentcolumn) : IconAOrderAdjustmentcolumn;

export default IconAOrderAdjustmentcolumn;
