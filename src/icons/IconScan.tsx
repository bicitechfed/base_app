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

let IconScan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 256H256v192H192V256a64 64 0 0 1 64-64h512a64 64 0 0 1 64 64v192h-64V256zM192 640h64v192h512v-192h64v192a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64v-192zM896 512H128v64h768z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconScan.defaultProps = {
  size: 18,
};

IconScan = React.memo ? React.memo(IconScan) : IconScan;

export default IconScan;
