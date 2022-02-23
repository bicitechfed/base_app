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

let IconPlay: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M739.2 511.04a19.2 19.2 0 0 1 0 33.28l-326.4 188.416a19.2 19.2 0 0 1-28.8-16.64V339.2a19.2 19.2 0 0 1 28.8-16.64l326.4 188.48z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPlay.defaultProps = {
  size: 18,
};

IconPlay = React.memo ? React.memo(IconPlay) : IconPlay;

export default IconPlay;
