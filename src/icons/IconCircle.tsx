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

let IconCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m0 64a384 384 0 1 0 0 768A384 384 0 0 0 512 128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
    </Svg>
  );
};

IconCircle.defaultProps = {
  size: 18,
};

IconCircle = React.memo ? React.memo(IconCircle) : IconCircle;

export default IconCircle;
