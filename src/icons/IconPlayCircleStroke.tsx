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

let IconPlayCircleStroke: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M739.2 495.36a19.2 19.2 0 0 1 0 33.28l-326.4 188.416a19.2 19.2 0 0 1-28.8-16.64V323.52a19.2 19.2 0 0 1 28.8-16.64l326.4 188.48zM448 401.152v221.696L640 512 448 401.152z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
      <Path
        d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m0 64a384 384 0 1 0 0 768A384 384 0 0 0 512 128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
    </Svg>
  );
};

IconPlayCircleStroke.defaultProps = {
  size: 18,
};

IconPlayCircleStroke = React.memo ? React.memo(IconPlayCircleStroke) : IconPlayCircleStroke;

export default IconPlayCircleStroke;
