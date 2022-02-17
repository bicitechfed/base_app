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

let IconA89Sousuo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M230.570667 622.762667c-108.309333-108.288-108.309333-283.904 0-392.192 108.288-108.309333 283.904-108.309333 392.192 0 103.253333 103.210667 108.074667 267.584 14.506666 376.533333l30.762667 30.741333 7.168-7.168 211.2 211.2-45.269333 45.248-211.2-211.2 7.914666-7.893333-30.72-30.741333c-108.970667 93.546667-273.344 88.704-376.554666-14.506667z m45.226666-346.944c-83.285333 83.306667-83.285333 218.389333 0 301.696 83.328 83.306667 218.410667 83.306667 301.717334 0 83.306667-83.306667 83.306667-218.389333 0-301.696-83.306667-83.306667-218.389333-83.306667-301.696 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconA89Sousuo.defaultProps = {
  size: 18,
};

IconA89Sousuo = React.memo ? React.memo(IconA89Sousuo) : IconA89Sousuo;

export default IconA89Sousuo;
