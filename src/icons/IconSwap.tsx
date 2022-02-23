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

let IconSwap: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 413.76h752.512l-246.016-240L615.168 128l298.944 291.52a33.92 33.92 0 0 1-23.68 58.24H64v-64zM928 669.76H177.28l243.84 230.4-43.968 46.528-298.816-282.368a33.92 33.92 0 0 1 23.296-58.56H928v64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSwap.defaultProps = {
  size: 18,
};

IconSwap = React.memo ? React.memo(IconSwap) : IconSwap;

export default IconSwap;
