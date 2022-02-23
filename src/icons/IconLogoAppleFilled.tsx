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

let IconLogoAppleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M715.328 64c5.568 50.56-14.848 101.312-44.928 137.856-30.144 36.48-79.616 64.832-128 61.056-6.592-49.6 17.856-101.12 45.76-133.568 31.232-36.48 83.776-63.616 127.168-65.344zM871.68 358.72c-9.344 5.76-93.632 58.304-92.544 163.968 1.152 127.616 109.44 171.968 115.52 174.464a8.064 8.064 0 0 0 0.32 0.128 50.56 50.56 0 0 0-0.384 1.088c-2.688 8.576-20.16 64.32-59.456 121.728-35.968 52.608-73.216 104.96-132.032 105.984-28.288 0.512-47.168-7.68-66.816-16.128-20.544-8.896-41.92-18.112-75.712-18.112-35.456 0-57.792 9.536-79.36 18.688-18.688 7.936-36.736 15.68-62.08 16.64-56.768 2.176-100.032-56.768-136.32-109.184-74.176-107.2-130.816-302.912-54.656-435.008 37.76-65.6 105.28-107.136 178.56-108.224 31.616-0.576 62.208 11.584 88.96 22.208 20.48 8.128 38.72 15.36 53.504 15.36 13.248 0 30.976-6.976 51.712-15.168 32.576-12.8 72.448-28.544 113.536-24.384 28.16 1.152 107.2 11.328 157.888 85.504a28.8 28.8 0 0 1-0.64 0.448z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoAppleFilled.defaultProps = {
  size: 18,
};

IconLogoAppleFilled = React.memo ? React.memo(IconLogoAppleFilled) : IconLogoAppleFilled;

export default IconLogoAppleFilled;
