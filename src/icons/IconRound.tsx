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

let IconRound: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 736a224 224 0 1 1 0-448 224 224 0 0 1 0 448zM512 832A320 320 0 1 0 512 192a320 320 0 0 0 0 640z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconRound.defaultProps = {
  size: 18,
};

IconRound = React.memo ? React.memo(IconRound) : IconRound;

export default IconRound;
