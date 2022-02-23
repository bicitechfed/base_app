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

let IconMenuUnfold: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 768.896L128.128 768 128 832l768 0.896zM544 480H128v64h416zM896 192.896L128.128 192 128 256l768 0.896zM642.112 538.048a32 32 0 0 1 0-51.2L844.8 334.848a32 32 0 0 1 51.2 25.6v304a32 32 0 0 1-51.2 25.6l-202.688-152zM832 600.448v-176l-117.312 88L832 600.448z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMenuUnfold.defaultProps = {
  size: 18,
};

IconMenuUnfold = React.memo ? React.memo(IconMenuUnfold) : IconMenuUnfold;

export default IconMenuUnfold;
