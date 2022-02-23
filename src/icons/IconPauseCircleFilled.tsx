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

let IconPauseCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 512A448 448 0 1 1 64 512a448 448 0 0 1 896 0zM384 320v384h64V320H384z m256 0H576v384h64V320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPauseCircleFilled.defaultProps = {
  size: 18,
};

IconPauseCircleFilled = React.memo ? React.memo(IconPauseCircleFilled) : IconPauseCircleFilled;

export default IconPauseCircleFilled;
