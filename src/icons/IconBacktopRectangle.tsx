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

let IconBacktopRectangle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M479.936 524.608L380.48 622.08l-45.824-44.672 177.536-174.208 179.136 174.72-45.696 44.8-101.056-98.56V768H480zM288 352h448v-64h-448z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M192 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H192z m640 64v640H192V192h640z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBacktopRectangle.defaultProps = {
  size: 18,
};

IconBacktopRectangle = React.memo ? React.memo(IconBacktopRectangle) : IconBacktopRectangle;

export default IconBacktopRectangle;
