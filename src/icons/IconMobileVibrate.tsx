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

let IconMobileVibrate: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M416 800h192v-64h-192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M320 64a64 64 0 0 0-64 64v736a64 64 0 0 0 64 64h384a64 64 0 0 0 64-64V128a64 64 0 0 0-64-64H320z m384 64v736H320V128h384zM128 224v576h64v-576zM832 224v576h64v-576z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMobileVibrate.defaultProps = {
  size: 18,
};

IconMobileVibrate = React.memo ? React.memo(IconMobileVibrate) : IconMobileVibrate;

export default IconMobileVibrate;
