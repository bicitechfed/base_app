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

let IconCloseCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0zM362.88 316.672L512 466.56l149.12-149.952 45.312 45.12L557.12 512l149.312 150.272-45.376 45.056L512 557.44l-149.12 150.016-45.312-45.12L466.88 512 317.568 361.792l45.376-45.12z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCloseCircleFilled.defaultProps = {
  size: 18,
};

IconCloseCircleFilled = React.memo ? React.memo(IconCloseCircleFilled) : IconCloseCircleFilled;

export default IconCloseCircleFilled;
