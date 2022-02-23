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

let IconHourglass: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 487.424l256-212.288V192H256v83.2l256 212.224zM192 305.216V192a64 64 0 0 1 64-64h512a64 64 0 0 1 64 64v113.28L544 544l288 238.72V896a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64v-113.28L480 544 192 305.28z m64 507.648V896h512v-83.2L512 600.64l-256 212.288z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHourglass.defaultProps = {
  size: 18,
};

IconHourglass = React.memo ? React.memo(IconHourglass) : IconHourglass;

export default IconHourglass;
