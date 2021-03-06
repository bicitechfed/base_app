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

let IconStar: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d=""
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconStar.defaultProps = {
  size: 18,
};

IconStar = React.memo ? React.memo(IconStar) : IconStar;

export default IconStar;
