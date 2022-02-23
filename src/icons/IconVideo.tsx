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

let IconVideo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M707.2 495.36a19.2 19.2 0 0 1 0 33.28l-326.4 188.416a19.2 19.2 0 0 1-28.8-16.64V323.52a19.2 19.2 0 0 1 28.8-16.64l326.4 188.48zM416 401.152v221.696L608 512l-192-110.848z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 192a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v640a64 64 0 0 1-64 64H192a64 64 0 0 1-64-64V192z m64 0v640h640V192H192z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconVideo.defaultProps = {
  size: 18,
};

IconVideo = React.memo ? React.memo(IconVideo) : IconVideo;

export default IconVideo;
