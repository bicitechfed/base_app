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

let IconTianjia: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M696.0128 480h-152.0128V327.9872a8.0384 8.0384 0 0 0-7.9872-7.9872H487.936a8.0384 8.0384 0 0 0-7.9872 7.9872v152.0128H327.9872a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872h152.0128v152.0128c0 4.4032 3.584 7.9872 7.9872 7.9872h48.0256c4.4032 0 7.9872-3.584 7.9872-7.9872v-152.0128h152.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V487.936a8.0384 8.0384 0 0 0-7.9872-7.9872z"
        fill={getIconColor(color, 0, '#000000')}
      />
      <Path
        d="M512 64a448 448 0 1 0 0.0512 896.0512A448 448 0 0 0 512 64z m0 820.0192a372.0704 372.0704 0 0 1 0-744.0384 372.0704 372.0704 0 0 1 0 744.0384z"
        fill={getIconColor(color, 1, '#000000')}
      />
    </Svg>
  );
};

IconTianjia.defaultProps = {
  size: 18,
};

IconTianjia = React.memo ? React.memo(IconTianjia) : IconTianjia;

export default IconTianjia;
