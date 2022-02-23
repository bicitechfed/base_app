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

let IconLayers: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M932.736 286.656l-388.672 161.92-388.736-161.92c-26.24-10.944-26.24-49.728 0-60.672L544.064 64l388.672 161.92c26.24 11.008 26.24 49.792 0 60.736zM251.392 256.32L544.064 378.24l292.608-121.92L544.064 134.4 251.392 256.32z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 417.792v78.528l416.064 182.912L960 496.384V417.856L544.064 600.704z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 634.88v78.592l416.064 182.912L960 713.536V635.008l-415.936 182.848z"
        fill={getIconColor(color, 2, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLayers.defaultProps = {
  size: 18,
};

IconLayers = React.memo ? React.memo(IconLayers) : IconLayers;

export default IconLayers;
