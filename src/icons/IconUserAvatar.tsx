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

let IconUserAvatar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M515.072 666.88c79.424 0 155.008 19.968 224 56.256v71.68h64v-73.024a60.224 60.224 0 0 0-31.104-53.632 542.72 542.72 0 0 0-256.896-65.28 542.72 542.72 0 0 0-256.96 65.28 60.224 60.224 0 0 0-31.04 53.632v73.024h64V723.2a478.272 478.272 0 0 1 224-56.32zM675.072 378.88a160 160 0 1 1-320 0 160 160 0 0 1 320 0z m-64 0a96 96 0 1 0-192 0 96 96 0 0 0 192 0z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M163.072 90.88a64 64 0 0 0-64 64v704a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64v-704a64 64 0 0 0-64-64h-704z m704 64v704h-704v-704h704z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  );
};

IconUserAvatar.defaultProps = {
  size: 18,
};

IconUserAvatar = React.memo ? React.memo(IconUserAvatar) : IconUserAvatar;

export default IconUserAvatar;
