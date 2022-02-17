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

let IconXinxitianbao2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.768 128v64H192.512v639.8976H832v-311.6544h64v333.1072c0 23.552-19.0976 42.6496-42.6496 42.6496H170.752a42.6496 42.6496 0 0 1-42.6496-42.6496V170.6496c0-23.552 19.0976-42.6496 42.6496-42.6496h342.016z m231.9872-30.1568a42.6496 42.6496 0 0 1 60.2112-0.2048l113.9712 112.5376 2.6112 2.816a42.6496 42.6496 0 0 1-2.3552 57.6512l-418.1504 419.7376a21.3504 21.3504 0 0 1-15.104 6.2976H341.3504a21.3504 21.3504 0 0 1-21.3504-21.3504v-143.1552c0-5.632 2.2528-11.0592 6.2464-15.0528z m30.3104 60.2624L384 549.7856v82.944h84.224L858.7264 240.64l-83.6608-82.5344z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconXinxitianbao2.defaultProps = {
  size: 18,
};

IconXinxitianbao2 = React.memo ? React.memo(IconXinxitianbao2) : IconXinxitianbao2;

export default IconXinxitianbao2;
