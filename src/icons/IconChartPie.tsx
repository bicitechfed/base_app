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

let IconChartPie: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 512A448 448 0 1 1 64 512a448 448 0 0 1 896 0z m-65.28 32H480V129.28a384 384 0 1 0 414.72 414.72z m0-64A384.064 384.064 0 0 0 544 129.28V480h350.72z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChartPie.defaultProps = {
  size: 18,
};

IconChartPie = React.memo ? React.memo(IconChartPie) : IconChartPie;

export default IconChartPie;
