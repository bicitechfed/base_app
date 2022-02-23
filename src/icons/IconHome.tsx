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

let IconHome: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M374.656 672v64h256v-64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M480 73.344a32 32 0 0 1 45.248 0l416 416-45.248 45.312-73.344-73.408V832a64 64 0 0 1-64 64h-512a64 64 0 0 1-64-64V461.248L109.248 534.656 64 489.344l416-416z m22.656 67.904l-256 256V832h512V397.248l-256-256z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHome.defaultProps = {
  size: 18,
};

IconHome = React.memo ? React.memo(IconHome) : IconHome;

export default IconHome;
