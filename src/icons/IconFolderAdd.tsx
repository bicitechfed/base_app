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

let IconFolderAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 192a64 64 0 0 1 64-64h229.76l132.608 96H864a64 64 0 0 1 64 64v256h-64v-256H533.632L401.088 192H192v576h384v64H192a64 64 0 0 1-64-64V192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M800 960v-128h-128v-64h128v-128h64v128h128v64h-128v128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFolderAdd.defaultProps = {
  size: 18,
};

IconFolderAdd = React.memo ? React.memo(IconFolderAdd) : IconFolderAdd;

export default IconFolderAdd;
