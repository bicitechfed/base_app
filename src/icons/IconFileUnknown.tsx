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

let IconFileUnknown: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 128v768h288v64H255.68C225.28 960 192 938.432 192 900.992V123.008C192 85.568 225.28 64 255.68 64h311.68a64 64 0 0 1 45.76 19.2l232.576 237.056a64 64 0 0 1 18.304 44.8V480h-64V384.832h-256V128H256z m352 41.344v151.488h148.608L608 169.344z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M736 538.88c-68.48 0-128 52.608-128 121.728h64c0-29.76 26.624-57.664 64-57.664 37.376 0 64 27.904 64 57.664 0 19.2-17.92 42.24-46.016 52.864h-0.128c-28.352 11.008-49.856 37.952-49.856 71.168v42.24h64v-42.24c0-4.16 2.624-8.96 8.832-11.392 42.112-16 87.168-56.96 87.168-112.64 0-69.12-59.52-121.664-128-121.664zM736 883.2a38.4 38.4 0 1 0 0 76.8 38.4 38.4 0 0 0 0-76.8z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFileUnknown.defaultProps = {
  size: 18,
};

IconFileUnknown = React.memo ? React.memo(IconFileUnknown) : IconFileUnknown;

export default IconFileUnknown;
