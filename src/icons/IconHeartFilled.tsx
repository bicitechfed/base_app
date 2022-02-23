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

let IconHeartFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 406.784c0-186.496 221.696-284.032 359.168-158.08L512 271.616l24.832-22.784C674.304 122.688 896 220.288 896 406.784c0 56.832-22.592 111.36-62.72 151.552l-311.936 311.872c-5.12 5.12-13.504 5.12-18.688 0L190.784 558.336A214.336 214.336 0 0 1 128 406.784z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHeartFilled.defaultProps = {
  size: 18,
};

IconHeartFilled = React.memo ? React.memo(IconHeartFilled) : IconHeartFilled;

export default IconHeartFilled;
