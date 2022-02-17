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

let IconA77JianKuang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c235.648 0 426.666667 191.018667 426.666667 426.666667s-191.018667 426.666667-426.666667 426.666667S85.333333 747.648 85.333333 512 276.352 85.333333 512 85.333333z m143.210667 268.181334a21.333333 21.333333 0 0 0-30.165334 0l-113.472 113.493333-113.066666-113.066667a21.333333 21.333333 0 0 0-28.16-1.770666l-2.005334 1.770666-15.082666 15.104a21.333333 21.333333 0 0 0 0 30.165334l113.066666 113.045333-112.810666 112.789333a21.333333 21.333333 0 0 0-1.770667 28.16l1.770667 2.005334 15.082666 15.104a21.333333 21.333333 0 0 0 30.186667 0l112.789333-112.810667 113.216 113.237333a21.333333 21.333333 0 0 0 28.16 1.770667l2.005334-1.770667 15.104-15.082666a21.333333 21.333333 0 0 0 0-30.186667L556.8 512.256l113.493333-113.493333a21.333333 21.333333 0 0 0 1.770667-28.16l-1.770667-2.005334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconA77JianKuang.defaultProps = {
  size: 18,
};

IconA77JianKuang = React.memo ? React.memo(IconA77JianKuang) : IconA77JianKuang;

export default IconA77JianKuang;
