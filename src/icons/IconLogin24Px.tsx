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

let IconLogin24Px: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M554.666667 725.333333l59.733333-59.733333-110.933333-110.933333H938.666667v-85.333334H503.466667l110.933333-110.933333L554.666667 298.666667l-213.333334 213.333333 213.333334 213.333333zM170.666667 213.333333h341.333333V128H170.666667c-46.933333 0-85.333333 38.4-85.333334 85.333333v597.333334c0 46.933333 38.4 85.333333 85.333334 85.333333h341.333333v-85.333333H170.666667V213.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLogin24Px.defaultProps = {
  size: 18,
};

IconLogin24Px = React.memo ? React.memo(IconLogin24Px) : IconLogin24Px;

export default IconLogin24Px;
