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

let IconHelpCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M473.6 742.4a38.4 38.4 0 1 1 76.8 0 38.4 38.4 0 0 1-76.8 0zM512 256.384a155.328 155.328 0 0 0-155.2 155.2h64c0-50.24 40.96-91.2 91.2-91.2s91.2 40.96 91.2 91.2c0 34.432-28.48 68.928-65.6 84.032h-0.128c-33.92 14.08-57.472 47.36-57.472 86.272V640h64v-58.112c0-12.416 7.36-22.72 17.792-27.008 52.992-21.568 105.408-74.944 105.408-143.296A155.328 155.328 0 0 0 512 256.384z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0z m-64 0A384 384 0 1 1 128 512a384 384 0 0 1 768 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHelpCircle.defaultProps = {
  size: 18,
};

IconHelpCircle = React.memo ? React.memo(IconHelpCircle) : IconHelpCircle;

export default IconHelpCircle;
