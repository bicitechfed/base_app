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

let IconLockOff: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 735.552v-64h256v64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M288 415.552v-64a224 224 0 1 1 448 0h-64a160 160 0 0 0-320 0v64H832a32 32 0 0 1 32 32v448a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32v-448a32 32 0 0 1 32-32h96z m-64 448h576v-384h-576v384z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLockOff.defaultProps = {
  size: 18,
};

IconLockOff = React.memo ? React.memo(IconLockOff) : IconLockOff;

export default IconLockOff;
