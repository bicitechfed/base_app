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

let IconOrderAscending: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 861.376V234.624l137.344 137.344 45.248-45.248-188.672-188.736a33.92 33.92 0 0 0-57.92 24V861.44h64zM608 861.376H128v-64h480zM128 541.376h480v-64H128zM608 221.376H128v-64h480z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconOrderAscending.defaultProps = {
  size: 18,
};

IconOrderAscending = React.memo ? React.memo(IconOrderAscending) : IconOrderAscending;

export default IconOrderAscending;
