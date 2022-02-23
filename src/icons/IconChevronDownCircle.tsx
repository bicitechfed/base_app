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

let IconChevronDownCircle: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M690.752 397.248L512 576 333.248 397.248l-45.248 45.248 224 224 224-224z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M64 512a448 448 0 1 1 896 0A448 448 0 0 1 64 512z m64 0a384 384 0 1 0 768 0A384 384 0 0 0 128 512z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronDownCircle.defaultProps = {
  size: 18,
};

IconChevronDownCircle = React.memo ? React.memo(IconChevronDownCircle) : IconChevronDownCircle;

export default IconChevronDownCircle;
