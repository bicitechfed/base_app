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

let IconCalendar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M640 224H384V128H320v96H192a64 64 0 0 0-64 64v576a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64v-576a64 64 0 0 0-64-64h-128V128h-64v96z m-320 128h64v-64h256v64h64v-64h128v128H192v-128h128v64z m-128 128h640v384H192v-384z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCalendar.defaultProps = {
  size: 18,
};

IconCalendar = React.memo ? React.memo(IconCalendar) : IconCalendar;

export default IconCalendar;
