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

let IconRenwuliebiao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880.0256 184.0128h-168.0384v-64a8.0384 8.0384 0 0 0-7.9872-7.9872h-56.0128a8.0384 8.0384 0 0 0-7.9872 7.9872v64h-256v-64a8.0384 8.0384 0 0 0-7.9872-7.9872H320a8.0384 8.0384 0 0 0-7.9872 7.9872v64H143.9744a31.9488 31.9488 0 0 0-31.9488 32v663.9616c0 17.7152 14.2848 32 31.9488 32h736.0512c17.664 0 32-14.2848 32-32V216.064a31.9488 31.9488 0 0 0-32-32z m-40.0384 655.9744H184.0128V256h128v48.0256c0 4.352 3.584 7.9872 7.9872 7.9872h56.0128c4.4032 0 7.9872-3.584 7.9872-8.0384V256h256v48.0256c0 4.352 3.584 7.9872 7.9872 7.9872h56.0128c4.4032 0 7.9872-3.584 7.9872-8.0384V256h128v583.9872z m-151.9616-419.9936h-55.2448c-5.12 0-9.984 2.5088-13.0048 6.6048l-150.8864 207.8208-64.6656-89.0368a16.128 16.128 0 0 0-13.0048-6.6048H335.9744a8.0384 8.0384 0 0 0-6.4512 12.6976l126.3616 174.0288a16.128 16.128 0 0 0 26.0096 0l212.5824-292.7104a8.0896 8.0896 0 0 0-6.5024-12.8z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRenwuliebiao.defaultProps = {
  size: 18,
};

IconRenwuliebiao = React.memo ? React.memo(IconRenwuliebiao) : IconRenwuliebiao;

export default IconRenwuliebiao;
