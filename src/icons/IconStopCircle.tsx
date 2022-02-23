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

let IconStopCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M448 320H384v384h64zM640 320H576v384h64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M263.104 139.52a448 448 0 1 1 497.792 744.96A448 448 0 0 1 263.104 139.52z m462.208 53.184a384 384 0 1 0-426.624 638.592 384 384 0 0 0 426.624-638.592z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconStopCircle.defaultProps = {
  size: 18,
};

IconStopCircle = React.memo ? React.memo(IconStopCircle) : IconStopCircle;

export default IconStopCircle;
