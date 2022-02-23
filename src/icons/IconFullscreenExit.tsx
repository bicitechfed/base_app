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

let IconFullscreenExit: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M406.656 361.344V182.656h64v256a32 32 0 0 1-32 32h-256v-64h178.688L128 173.248 173.248 128l233.408 233.344zM598.656 643.84v178.816h-64v-256a32 32 0 0 1 32-32h256v64H643.84L877.248 832l-45.248 45.248-233.344-233.344z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFullscreenExit.defaultProps = {
  size: 18,
};

IconFullscreenExit = React.memo ? React.memo(IconFullscreenExit) : IconFullscreenExit;

export default IconFullscreenExit;
