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

let IconShop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a160 160 0 0 0-160 160V320h-128a32 32 0 0 0-32 32v576a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32v-576a32 32 0 0 0-32-32h-128V224A160 160 0 0 0 512 64z m96 320v128h64V384H768v512H256V384h96v128h64V384h192z m0-64h-192V224a96 96 0 1 1 192 0V320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconShop.defaultProps = {
  size: 18,
};

IconShop = React.memo ? React.memo(IconShop) : IconShop;

export default IconShop;
