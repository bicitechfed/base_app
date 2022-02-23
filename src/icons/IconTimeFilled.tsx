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

let IconTimeFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 960A448 448 0 1 0 512 64a448 448 0 0 0 0 896zM480 320h64v190.4l182.656 182.656-45.248 45.248L480 536.896V320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconTimeFilled.defaultProps = {
  size: 18,
};

IconTimeFilled = React.memo ? React.memo(IconTimeFilled) : IconTimeFilled;

export default IconTimeFilled;
