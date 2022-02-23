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

let IconChevronUpCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M333.248 626.752L512 448l178.752 178.752 45.248-45.248-224-224-224 224z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M960 512A448 448 0 1 1 64 512a448 448 0 0 1 896 0z m-64 0A384 384 0 1 0 128 512a384 384 0 0 0 768 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronUpCircle.defaultProps = {
  size: 18,
};

IconChevronUpCircle = React.memo ? React.memo(IconChevronUpCircle) : IconChevronUpCircle;

export default IconChevronUpCircle;
