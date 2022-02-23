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

let IconChevronLeftCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M626.752 690.752L448 512l178.752-178.752-45.248-45.248-224 224 224 224z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M512 64a448 448 0 1 1 0 896A448 448 0 0 1 512 64z m0 64a384 384 0 1 0 0 768A384 384 0 0 0 512 128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronLeftCircle.defaultProps = {
  size: 18,
};

IconChevronLeftCircle = React.memo ? React.memo(IconChevronLeftCircle) : IconChevronLeftCircle;

export default IconChevronLeftCircle;
