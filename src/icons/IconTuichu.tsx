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

let IconTuichu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M680.768 214.592a36.032 36.032 0 0 1 33.152-63.936 439.232 439.232 0 1 1-403.84 0 36.032 36.032 0 1 1 33.152 64 367.168 367.168 0 1 0 337.536 0zM547.968 368a36.032 36.032 0 0 1-72 0v-288a36.032 36.032 0 0 1 72 0v288z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconTuichu.defaultProps = {
  size: 18,
};

IconTuichu = React.memo ? React.memo(IconTuichu) : IconTuichu;

export default IconTuichu;
