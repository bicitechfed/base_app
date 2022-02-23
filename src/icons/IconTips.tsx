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

let IconTips: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a317.248 317.248 0 0 0-226.176 93.824A317.248 317.248 0 0 0 192 384c0 88 35.456 168.32 93.76 226.048 19.776 20.288 42.176 37.12 66.24 51.008V768a64 64 0 0 0 64 64h192a64 64 0 0 0 64-64v-106.944c24.064-13.824 46.464-30.72 66.24-51.008A317.248 317.248 0 0 0 832 384c0-177.024-142.976-320-320-320zM331.264 202.944A253.248 253.248 0 0 1 512 128c141.696 0 256 114.304 256 256a253.184 253.184 0 0 1-74.944 180.736l-0.512 0.512a245.248 245.248 0 0 1-66.88 48l-17.664 8.896V768h-192V622.144l-17.664-8.832a245.248 245.248 0 0 1-66.88-48.064l-0.512-0.512A253.248 253.248 0 0 1 256 384c0-70.656 28.48-134.784 74.944-180.736l0.32-0.32zM352 896v64h320v-64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconTips.defaultProps = {
  size: 18,
};

IconTips = React.memo ? React.memo(IconTips) : IconTips;

export default IconTips;
