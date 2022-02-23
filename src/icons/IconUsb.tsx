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

let IconUsb: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 320h-128V256h128zM544 320h128V256h-128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M256 448V96a32 32 0 0 1 32-32h448a32 32 0 0 1 32 32V448a64 64 0 0 1 64 64v320a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V512a64 64 0 0 1 64-64z m64 0h384V128H320v320zM256 512v320h512V512H256z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconUsb.defaultProps = {
  size: 18,
};

IconUsb = React.memo ? React.memo(IconUsb) : IconUsb;

export default IconUsb;
