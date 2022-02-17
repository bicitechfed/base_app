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

let IconShuangjiantou: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M209.92 138.24L560.64 487.253333c13.824 13.653333 13.824 35.84 0.170667 49.664l-0.170667 0.170667-1.962667 1.536-349.013333 347.136a35.413333 35.413333 0 0 1-44.373333 4.522667l-5.546667-4.522667a35.157333 35.157333 0 0 1 0-49.92l325.546667-323.925333-325.376-323.669334a35.157333 35.157333 0 0 1-0.085334-49.664l0.085334-0.170666h0.085333a35.413333 35.413333 0 0 1 49.92 0z m303.616 0l350.72 348.928c13.824 13.653333 13.824 35.84 0.170667 49.664l-0.170667 0.170667-1.962667 1.536-349.013333 347.136a35.413333 35.413333 0 0 1-44.373333 4.522666l-5.546667-4.522666a35.157333 35.157333 0 0 1 0-49.92l325.546667-323.925334-325.376-323.669333a35.157333 35.157333 0 0 1-0.085334-49.664l0.085334-0.170667h0.085333a35.413333 35.413333 0 0 1 49.92 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconShuangjiantou.defaultProps = {
  size: 18,
};

IconShuangjiantou = React.memo ? React.memo(IconShuangjiantou) : IconShuangjiantou;

export default IconShuangjiantou;
