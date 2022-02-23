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

let IconCheckCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288 525.248l160 160 288-288-45.312-45.248L448 594.752 333.184 480z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M263.104 139.52a448 448 0 1 1 497.792 744.96A448 448 0 0 1 263.104 139.52z m35.584 691.776a384 384 0 1 0 426.624-638.592 384 384 0 0 0-426.624 638.592z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCheckCircle.defaultProps = {
  size: 18,
};

IconCheckCircle = React.memo ? React.memo(IconCheckCircle) : IconCheckCircle;

export default IconCheckCircle;
