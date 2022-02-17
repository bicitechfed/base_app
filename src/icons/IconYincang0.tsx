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

let IconYincang0: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512.213333 192C728.106667 192 884.48 298.410667 981.333333 511.232 874.837333 725.077333 718.4 832 512 832S149.162667 725.077333 42.666667 511.232C139.797333 298.410667 296.32 192 512.213333 192z m0 64c-178.090667 0-307.072 80-394.176 246.698667l-3.818666 7.381333 4.821333 8.746667c93.013333 165.546667 219.285333 246.357333 384.234667 249.109333L512 768c169.237333 0 298.304-80.746667 392.96-249.173333l4.821333-8.789334-3.797333-7.381333c-85.397333-163.84-211.349333-243.925333-384.768-246.592L512.213333 256zM512 320a192 192 0 1 1 0 384 192 192 0 0 1 0-384z m0 64a128 128 0 1 0 0 256 128 128 0 0 0 0-256z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconYincang0.defaultProps = {
  size: 18,
};

IconYincang0 = React.memo ? React.memo(IconYincang0) : IconYincang0;

export default IconYincang0;
