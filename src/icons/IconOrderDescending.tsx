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

let IconOrderDescending: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M608 128H128v64h480zM768 128v626.752l137.344-137.408 45.248 45.312-188.672 188.672a33.92 33.92 0 0 1-57.92-23.936V128h64zM120.512 437.952h480v64h-480zM608 768H128v64h480z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconOrderDescending.defaultProps = {
  size: 18,
};

IconOrderDescending = React.memo ? React.memo(IconOrderDescending) : IconOrderDescending;

export default IconOrderDescending;
