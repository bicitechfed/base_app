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

let IconTianjiarunhua: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M832 85.333333a21.333333 21.333333 0 0 1 21.333333 21.333334v576h-64V192H538.496L234.666667 495.829333V874.666667h362.666666v64H213.333333a42.666667 42.666667 0 0 1-42.56-39.466667L170.666667 896V486.997333a42.666667 42.666667 0 0 1 9.962666-27.392l2.538667-2.773333L499.498667 140.501333A42.666667 42.666667 0 0 1 512 131.818667V106.666667a21.333333 21.333333 0 0 1 21.333333-21.333334h298.666667z m-117.333333 554.666667a21.333333 21.333333 0 0 1 21.333333 21.333333v96H832a21.333333 21.333333 0 0 1 21.333333 21.333334v21.333333a21.333333 21.333333 0 0 1-21.333333 21.333333h-96V917.333333a21.333333 21.333333 0 0 1-21.333333 21.333334h-21.333334a21.333333 21.333333 0 0 1-21.333333-21.333334v-96.021333L576 821.333333a21.333333 21.333333 0 0 1-21.333333-21.333333v-21.333333a21.333333 21.333333 0 0 1 21.333333-21.333334l96-0.021333V661.333333a21.333333 21.333333 0 0 1 21.333333-21.333333h21.333334z m-196.202667-330.88l15.082667 15.082667a21.333333 21.333333 0 0 1 0 30.165333l-211.2 211.2a21.333333 21.333333 0 0 1-30.144 0l-15.082667-15.104a21.333333 21.333333 0 0 1 0-30.165333l211.2-211.2a21.333333 21.333333 0 0 1 30.144 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTianjiarunhua.defaultProps = {
  size: 18,
};

IconTianjiarunhua = React.memo ? React.memo(IconTianjiarunhua) : IconTianjiarunhua;

export default IconTianjiarunhua;
