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

let IconLogoIeFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M740.224 546.56h217.408A385.92 385.92 0 0 0 960 502.016c0-70.912-19.84-137.472-54.4-194.752 35.776-91.392 34.496-168.96-13.44-215.296-45.632-43.52-167.936-36.48-306.176 22.272a427.392 427.392 0 0 0-30.976-1.088c-189.824 0-349.056 125.44-393.024 294.4 59.52-73.216 122.176-126.272 205.824-164.928-7.616 6.848-52.032 49.216-59.52 56.384C87.68 510.912 18.176 787.52 93.056 859.52c56.96 54.656 160 45.44 278.528-10.304 55.04 26.88 117.376 42.112 183.488 42.112 177.856 0 328.576-109.952 383.232-263.04h-219.136a179.456 179.456 0 0 1-156.8 89.728 179.456 179.456 0 0 1-156.736-89.728c-13.44-24.128-21.12-51.84-21.12-81.088v-0.64h355.84zM384.832 443.84c4.992-85.888 79.36-154.432 170.176-154.432 90.752 0 165.12 68.48 170.176 154.432H384.832z m505.344-308.672c30.848 29.952 30.08 85.12 3.648 153.92A403.456 403.456 0 0 0 705.28 140.8c83.008-34.176 150.528-38.72 184.96-5.632zM150.08 845.824c-39.36-37.824-27.52-117.312 23.232-212.992a394.176 394.176 0 0 0 172.544 202.688c-87.872 38.272-159.808 44.8-195.776 10.24z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoIeFilled.defaultProps = {
  size: 18,
};

IconLogoIeFilled = React.memo ? React.memo(IconLogoIeFilled) : IconLogoIeFilled;

export default IconLogoIeFilled;
