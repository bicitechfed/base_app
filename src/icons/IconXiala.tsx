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

let IconXiala: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1433 1024" width={size} height={size} {...rest}>
      <Path
        d="M800.768 904.192l520.0896-743.1168A102.4 102.4 0 0 0 1236.8896 0H196.7104a102.4 102.4 0 0 0-83.968 161.0752l520.192 743.1168a102.4 102.4 0 0 0 167.7312 0z"
        fill={getIconColor(color, 0, '#CDCDCD')}
      />
    </Svg>
  );
};

IconXiala.defaultProps = {
  size: 18,
};

IconXiala = React.memo ? React.memo(IconXiala) : IconXiala;

export default IconXiala;
