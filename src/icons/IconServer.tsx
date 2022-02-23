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

let IconServer: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 336h-192v-64h192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 160a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32l0.064 288a32 32 0 0 1-32 32h-768a32 32 0 0 1-32-32L128 160z m64 256h704V192H192v224zM288 752h192v-64h-192z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128.064 576a32 32 0 0 1 32-32h768a32 32 0 0 1 32 32v288a32 32 0 0 1-32 32h-768a32 32 0 0 1-32-32V576z m64 256h704V608h-704V832z"
        fill={getIconColor(color, 2, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconServer.defaultProps = {
  size: 18,
};

IconServer = React.memo ? React.memo(IconServer) : IconServer;

export default IconServer;
