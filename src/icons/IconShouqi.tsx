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

let IconShouqi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1102 1024" width={size} height={size} {...rest}>
      <Path
        d="M1055.428923 575.566769a37.572923 37.572923 0 0 1-53.090461 0L550.833231 124.061538 99.406769 575.566769a37.572923 37.572923 0 1 1-53.169231-53.090461L524.288 44.425846a37.572923 37.572923 0 0 1 53.090462 0L1055.507692 522.476308a37.572923 37.572923 0 0 1 0 53.090461z m0 375.571693a37.572923 37.572923 0 0 1-53.090461 0L550.833231 499.633231l-451.426462 451.505231a37.572923 37.572923 0 1 1-53.169231-53.090462l478.050462-478.050462a37.572923 37.572923 0 0 1 53.090462 0l478.050461 478.050462a37.572923 37.572923 0 0 1 0 53.090462z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconShouqi.defaultProps = {
  size: 18,
};

IconShouqi = React.memo ? React.memo(IconShouqi) : IconShouqi;

export default IconShouqi;
