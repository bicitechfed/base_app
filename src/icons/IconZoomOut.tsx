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

let IconZoomOut: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M592 464h-320v-64h320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M624.704 669.952a304.896 304.896 0 1 1 45.248-45.248L896 850.688l-45.248 45.248-225.984-225.92z m49.152-237.056a240.896 240.896 0 1 0-481.856 0 240.896 240.896 0 0 0 481.792 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconZoomOut.defaultProps = {
  size: 18,
};

IconZoomOut = React.memo ? React.memo(IconZoomOut) : IconZoomOut;

export default IconZoomOut;
