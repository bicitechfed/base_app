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

let IconCheckCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896zM288 525.248l45.248-45.248L448 594.752 690.752 352l45.248 45.248-288 288-160-160z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCheckCircleFilled.defaultProps = {
  size: 18,
};

IconCheckCircleFilled = React.memo ? React.memo(IconCheckCircleFilled) : IconCheckCircleFilled;

export default IconCheckCircleFilled;
