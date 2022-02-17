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

let IconSaoerweima: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M213.333333 661.333333V810.666667h149.333334v85.333333H128v-234.666667h85.333333z m682.666667 0V896h-234.666667v-85.333333H810.666667v-149.333334h85.333333z m0-192v85.333334H128v-85.333334h768zM362.666667 128v85.333333H213.333333v149.333334H128V128h234.666667zM896 362.666667h-85.333333V213.333333h-149.333334V128H896v234.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSaoerweima.defaultProps = {
  size: 18,
};

IconSaoerweima = React.memo ? React.memo(IconSaoerweima) : IconSaoerweima;

export default IconSaoerweima;
