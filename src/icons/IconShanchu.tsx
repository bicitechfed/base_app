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

let IconShanchu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M259.2 74.304a505.28 505.28 0 1 1 505.28 875.2A505.28 505.28 0 0 1 259.2 74.24z m469.568 392.704H294.912a44.992 44.992 0 0 0 0 89.92h433.856a44.992 44.992 0 0 0 0-89.92z"
        fill={getIconColor(color, 0, '#E02020')}
      />
    </Svg>
  );
};

IconShanchu.defaultProps = {
  size: 18,
};

IconShanchu = React.memo ? React.memo(IconShanchu) : IconShanchu;

export default IconShanchu;
