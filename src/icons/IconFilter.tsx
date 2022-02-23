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

let IconFilter: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v114.304l-272 160V896h-224V466.304L128 306.304V192z m704 0H192v77.696l272 160V832h96V429.696l272-160V192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFilter.defaultProps = {
  size: 18,
};

IconFilter = React.memo ? React.memo(IconFilter) : IconFilter;

export default IconFilter;
