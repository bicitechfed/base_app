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

let IconAChevronRightdouble: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 768l58.88 58.88 285.376-285.44L250.816 256 192 314.88l226.56 226.56L192 768z m320 0l58.88 58.88 285.376-285.44L570.816 256 512 314.88l226.624 226.56L512 768z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconAChevronRightdouble.defaultProps = {
  size: 18,
};

IconAChevronRightdouble = React.memo ? React.memo(IconAChevronRightdouble) : IconAChevronRightdouble;

export default IconAChevronRightdouble;
