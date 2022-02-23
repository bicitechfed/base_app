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

let IconLockOn: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 672.64v64h256v-64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M288 352v64.64H192a32 32 0 0 0-32 32v448a32 32 0 0 0 32 32h640a32 32 0 0 0 32-32v-448a32 32 0 0 0-32-32h-96V352a224 224 0 0 0-448 0z m384 64.64h-320V352a160 160 0 0 1 320 0v64.64z m-448 64h576v384h-576v-384z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLockOn.defaultProps = {
  size: 18,
};

IconLockOn = React.memo ? React.memo(IconLockOn) : IconLockOn;

export default IconLockOn;
