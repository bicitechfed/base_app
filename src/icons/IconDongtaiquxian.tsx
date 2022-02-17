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

let IconDongtaiquxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M661.333333 128a128 128 0 0 1 82.773334 225.621333l56.860444 117.475556a117.333333 117.333333 0 1 1-57.6 27.875555l-56.832-117.475555a128.625778 128.625778 0 0 1-43.52 1.194667L509.44 649.102222a128 128 0 1 1-182.215111 16.952889L223.829333 528.497778a106.666667 106.666667 0 1 1 52.48-36.494222l102.343111 135.964444a127.630222 127.630222 0 0 1 73.557334-6.769778l131.868444-263.168A128 128 0 0 1 661.333333 128zM426.666667 688.497778a58.168889 58.168889 0 1 0 0 116.337778 58.168889 58.168889 0 0 0 0-116.337778z m394.666666-155.164445a53.333333 53.333333 0 1 0 0 106.666667 53.333333 53.333333 0 0 0 0-106.666667zM192 378.168889a48.497778 48.497778 0 1 0 0 96.995555 48.497778 48.497778 0 0 0 0-96.995555z m469.333333-180.337778a58.168889 58.168889 0 1 0 0 116.337778 58.168889 58.168889 0 0 0 0-116.337778z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconDongtaiquxian.defaultProps = {
  size: 18,
};

IconDongtaiquxian = React.memo ? React.memo(IconDongtaiquxian) : IconDongtaiquxian;

export default IconDongtaiquxian;
