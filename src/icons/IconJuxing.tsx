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

let IconJuxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 2666 1024" width={size} height={size} {...rest}>
      <Path
        d="M0 0h2453.333333l213.333334 512-213.333334 512H0z"
        fill={getIconColor(color, 0, '#B7D5F5')}
      />
    </Svg>
  );
};

IconJuxing.defaultProps = {
  size: 18,
};

IconJuxing = React.memo ? React.memo(IconJuxing) : IconJuxing;

export default IconJuxing;
