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

let IconGift: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 288c0 36.032 11.904 69.248 32 96H160a32 32 0 0 0-32 32v512a32 32 0 0 0 32 32h704a32 32 0 0 0 32-32v-512a32 32 0 0 0-32-32H768a160 160 0 0 0-256-192 160 160 0 0 0-288 96z m512 0A96 96 0 0 1 640 384H544V288a96 96 0 1 1 192 0zM480 448v288h64V448H832v448H192V448h288z m0-64H384a96 96 0 1 1 96-96V384z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconGift.defaultProps = {
  size: 18,
};

IconGift = React.memo ? React.memo(IconGift) : IconGift;

export default IconGift;
