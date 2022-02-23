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

let IconAChevronLeftdouble: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M856.256 250.88l-58.88-58.88L512 477.44l285.44 285.44 58.88-58.88-226.56-226.56z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M536.256 250.88L477.376 192 192 477.44l285.44 285.44 58.816-58.88-226.56-226.56z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconAChevronLeftdouble.defaultProps = {
  size: 18,
};

IconAChevronLeftdouble = React.memo ? React.memo(IconAChevronLeftdouble) : IconAChevronLeftdouble;

export default IconAChevronLeftdouble;
