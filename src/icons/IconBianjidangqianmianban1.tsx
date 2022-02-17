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

let IconBianjidangqianmianban1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
      <Path
        d="M698.9824 353.024h-46.8992c-10.1888 0-19.8656 4.864-25.9072 13.312l-157.184 217.9584-71.168-98.816a32 32 0 0 0-25.9072-13.312h-46.8992a8.0384 8.0384 0 0 0-6.5024 12.7488l124.5696 172.8a31.7952 31.7952 0 0 0 51.712 0l210.5856-291.9936a7.9872 7.9872 0 0 0-6.4-12.6976z"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

IconBianjidangqianmianban1.defaultProps = {
  size: 18,
};

IconBianjidangqianmianban1 = React.memo ? React.memo(IconBianjidangqianmianban1) : IconBianjidangqianmianban1;

export default IconBianjidangqianmianban1;
