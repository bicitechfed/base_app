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

let IconDashboard: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M884.864 282.048L596.928 569.984l-45.248-45.312L839.616 236.8z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
      <Path
        d="M510.272 675.328a64 64 0 1 1 0-128 64 64 0 0 1 0 128z m0 64a128 128 0 1 0 0-256 128 128 0 0 0 0 256z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
      <Path
        d="M508.864 192a416 416 0 0 0-341.44 653.696l-52.48 36.608a480 480 0 0 1 616.64-699.648l-29.76 56.704A414.08 414.08 0 0 0 508.864 192z m416 416a414.08 414.08 0 0 0-46.848-192l56.768-29.568a478.08 478.08 0 0 1 54.08 221.568 477.952 477.952 0 0 1-86.016 274.304l-52.48-36.608A413.952 413.952 0 0 0 924.8 608z"
        fill={getIconColor(color, 2, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
    </Svg>
  );
};

IconDashboard.defaultProps = {
  size: 18,
};

IconDashboard = React.memo ? React.memo(IconDashboard) : IconDashboard;

export default IconDashboard;
