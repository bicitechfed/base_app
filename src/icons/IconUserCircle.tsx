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

let IconUserCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 576a177.92 177.92 0 1 0 0-355.84A177.92 177.92 0 0 0 512 576z m0-64a113.92 113.92 0 1 1 0-227.84A113.92 113.92 0 0 1 512 512z"
        fill={getIconColor(color, 0, '#000000')}
        opacity=".9"
      />
      <Path
        d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896z m319.68-235.2C734.464 670.528 626.24 640 512 640c-114.304 0-222.4 30.464-319.68 84.8a384 384 0 1 1 639.424 0z m-40.448 50.752A382.912 382.912 0 0 1 512 896c-110.08 0-209.28-46.272-279.232-120.448C318.72 729.472 412.992 704 512 704c99.008 0 193.28 25.472 279.232 71.552z"
        fill={getIconColor(color, 1, '#000000')}
        opacity=".9"
      />
    </Svg>
  );
};

IconUserCircle.defaultProps = {
  size: 18,
};

IconUserCircle = React.memo ? React.memo(IconUserCircle) : IconUserCircle;

export default IconUserCircle;
