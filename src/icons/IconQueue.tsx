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

let IconQueue: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 192h576v576h64V192a64 64 0 0 0-64-64H256v64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M421.312 602.688v186.624h64V602.688h176v-64h-176v-176h-64v176H234.688v64z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 832a64 64 0 0 0 64 64h512a64 64 0 0 0 64-64V320a64 64 0 0 0-64-64H192a64 64 0 0 0-64 64v512z m64-512h512v512H192V320z"
        fill={getIconColor(color, 2, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconQueue.defaultProps = {
  size: 18,
};

IconQueue = React.memo ? React.memo(IconQueue) : IconQueue;

export default IconQueue;
