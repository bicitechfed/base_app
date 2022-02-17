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

let IconAShaixuan: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 512m-512 0a512 512 0 1 0 1024 0 512 512 0 1 0-1024 0Z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
      <Path
        d="M543.118222 707.299556a36.067556 36.067556 0 0 1-72.135111 0v-400.497778a36.067556 36.067556 0 0 1 72.135111 0v400.497778z m164.181334-236.316445a36.067556 36.067556 0 0 1 0 72.135111h-400.497778a36.067556 36.067556 0 1 1 0-72.135111h400.497778z"
        fill={getIconColor(color, 1, '#096DD9')}
      />
    </Svg>
  );
};

IconAShaixuan.defaultProps = {
  size: 18,
};

IconAShaixuan = React.memo ? React.memo(IconAShaixuan) : IconAShaixuan;

export default IconAShaixuan;
