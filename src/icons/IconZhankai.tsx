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

let IconZhankai: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1102 1024" width={size} height={size} {...rest}>
      <Path
        d="M1055.428923 448.433231a37.572923 37.572923 0 0 0-53.090461 0l-451.505231 451.505231-451.426462-451.505231a37.572923 37.572923 0 1 0-53.169231 53.090461l478.050462 478.050462a37.572923 37.572923 0 0 0 53.090462 0L1055.507692 501.523692a37.572923 37.572923 0 0 0 0-53.090461z m0-375.571693a37.572923 37.572923 0 0 0-53.090461 0L550.833231 524.366769 99.406769 72.861538a37.572923 37.572923 0 1 0-53.169231 53.090462l478.050462 478.050462a37.572923 37.572923 0 0 0 53.090462 0L1055.507692 125.952a37.572923 37.572923 0 0 0 0-53.090462z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconZhankai.defaultProps = {
  size: 18,
};

IconZhankai = React.memo ? React.memo(IconZhankai) : IconZhankai;

export default IconZhankai;
