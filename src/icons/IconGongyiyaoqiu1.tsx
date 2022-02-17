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

let IconGongyiyaoqiu1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M876.5952 239.5136a12.8 12.8 0 0 0-20.1216-2.5088l-172.288 172.288-67.8912-67.8912 172.3904-172.3904a12.7488 12.7488 0 0 0-2.5088-19.968 256.3584 256.3584 0 0 0-377.7536 287.0784L115.4048 729.088a7.7824 7.7824 0 0 0 0.3072 11.008l169.6768 169.728c3.072 3.072 8.0896 3.2768 11.008 0.256l292.864-292.864a256.3584 256.3584 0 0 0 287.2832-377.7024z m-90.624 260.3008a184.32 184.32 0 0 1-214.528 33.5872l-8.8576 8.8064-0.1024-0.1024-273.9712 274.0736-79.2064-79.1552L439.3984 506.88s0 0.1024 0.1024 0.1024l52.7872-52.736a184.32 184.32 0 0 1 177.6128-268.1344l-132.9152 132.8128a32.0512 32.0512 0 0 0 0 45.2608l124.5184 124.5184c12.4928 12.4928 32.768 12.4928 45.312 0l132.7616-132.8128a184.4224 184.4224 0 0 1-53.5552 143.872z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGongyiyaoqiu1.defaultProps = {
  size: 18,
};

IconGongyiyaoqiu1 = React.memo ? React.memo(IconGongyiyaoqiu1) : IconGongyiyaoqiu1;

export default IconGongyiyaoqiu1;
