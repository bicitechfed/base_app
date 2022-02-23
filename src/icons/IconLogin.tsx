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

let IconLogin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M606.528 480L462.848 336.256l45.248-45.248 198.4 198.4a32 32 0 0 1 0 45.248l-198.4 198.336-45.248-45.248L606.528 544H128v-64h478.528z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M320 320V192h512v640H320v-128H256v160a32 32 0 0 0 32 32h576a32 32 0 0 0 32-32v-704a32 32 0 0 0-32-32h-576a32 32 0 0 0-32 32V320h64z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogin.defaultProps = {
  size: 18,
};

IconLogin = React.memo ? React.memo(IconLogin) : IconLogin;

export default IconLogin;
