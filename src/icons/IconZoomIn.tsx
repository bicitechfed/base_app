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

let IconZoomIn: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M400 464v128h64v-128h128v-64h-128v-128h-64v128h-128v64z"
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

IconZoomIn.defaultProps = {
  size: 18,
};

IconZoomIn = React.memo ? React.memo(IconZoomIn) : IconZoomIn;

export default IconZoomIn;
