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

let IconFileCopy: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 123.008C256 85.568 289.28 64 319.68 64h279.68a64 64 0 0 1 45.76 19.2l232.576 237.056a64 64 0 0 1 18.304 44.8l0.32 407.936c0 37.376-33.28 59.008-63.744 59.008H320c-30.336 0-63.616-21.568-63.616-59.008L256 123.008zM320 128l0.32 640h512L832 384.832H576V128H320z m320 41.344v151.488h148.608L640 169.344z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M128 320v576.832a64 64 0 0 0 64 64h512v-64H192V320H128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFileCopy.defaultProps = {
  size: 18,
};

IconFileCopy = React.memo ? React.memo(IconFileCopy) : IconFileCopy;

export default IconFileCopy;
