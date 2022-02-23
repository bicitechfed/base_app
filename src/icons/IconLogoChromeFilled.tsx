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

let IconLogoChromeFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M897.472 283.648a7.36 7.36 0 0 1-6.336 11.072H531.584A218.112 218.112 0 0 0 300.8 457.6a7.36 7.36 0 0 1-13.44 1.856l-126.08-218.496a7.36 7.36 0 0 1 0.576-8.256A446.08 446.08 0 0 1 512 64a447.616 447.616 0 0 1 385.472 219.648z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M512 679.488A167.68 167.68 0 0 1 344.576 512 167.68 167.68 0 0 1 512 344.576 167.616 167.616 0 0 1 679.424 512 167.616 167.616 0 0 1 512 679.488z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M578.176 724.8a7.36 7.36 0 0 0-7.744-2.56 217.6 217.6 0 0 1-58.432 7.936 219.264 219.264 0 0 1-197.824-126.272L134.272 292.288a7.36 7.36 0 0 0-12.8 0.064 448.32 448.32 0 0 0 323.712 662.72l1.088 0.128c2.56 0 4.992-1.408 6.336-3.712l126.144-218.496a7.36 7.36 0 0 0-0.576-8.192z"
        fill={getIconColor(color, 2, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M669.76 343.68h252.544c3.072 0 5.76 1.92 6.848 4.736 20.48 52.096 30.848 107.136 30.848 163.584a445.248 445.248 0 0 1-129.536 315.136A445.248 445.248 0 0 1 517.056 960a7.36 7.36 0 0 1-6.4-11.008l180.224-312.192A216.64 216.64 0 0 0 730.176 512c0-58.944-23.296-114.24-65.536-155.648a7.36 7.36 0 0 1 5.12-12.608z"
        fill={getIconColor(color, 3, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoChromeFilled.defaultProps = {
  size: 18,
};

IconLogoChromeFilled = React.memo ? React.memo(IconLogoChromeFilled) : IconLogoChromeFilled;

export default IconLogoChromeFilled;
