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

let IconXinxitianbao1: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880.0256 112.0256H144.0256a31.9488 31.9488 0 0 0-32.0512 31.9488v736.0512c0 17.664 14.336 32 32.0512 32h735.9488c17.7152 0 32-14.336 32-32V144.0256a31.9488 31.9488 0 0 0-32-32.0512z m-40.0384 727.9616H184.0128V184.0128h655.9744v655.9744zM492.032 400.0256h184.0128c4.4032 0 7.9872-3.584 7.9872-8.0384V344.064a8.0384 8.0384 0 0 0-7.9872-8.0384H492.032a8.0384 8.0384 0 0 0-7.9872 8.0384v47.9744c0 4.4032 3.584 8.0384 7.9872 8.0384z m0 143.9744h184.0128c4.4032 0 7.9872-3.584 7.9872-7.9872V487.936a8.0384 8.0384 0 0 0-7.9872-7.9872H492.032a8.0384 8.0384 0 0 0-7.9872 7.9872v48.0256c0 4.4032 3.584 7.9872 7.9872 7.9872z m0 144.0256h184.0128c4.4032 0 7.9872-3.584 7.9872-8.0384v-47.9744a8.0384 8.0384 0 0 0-7.9872-7.9872H492.032a8.0384 8.0384 0 0 0-7.9872 7.9872v47.9744c0 4.4032 3.584 7.9872 7.9872 7.9872z m-151.9616-320a39.9872 39.9872 0 1 0 79.9744 0 39.9872 39.9872 0 0 0-79.9744 0z m0 143.9744a39.9872 39.9872 0 1 0 79.9744 0 39.9872 39.9872 0 0 0-79.9744 0z m0 144.0256a39.9872 39.9872 0 1 0 79.9744 0 39.9872 39.9872 0 0 0-79.9744 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconXinxitianbao1.defaultProps = {
  size: 18,
};

IconXinxitianbao1 = React.memo ? React.memo(IconXinxitianbao1) : IconXinxitianbao1;

export default IconXinxitianbao1;
