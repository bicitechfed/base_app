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

let IconBulletpoint: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 192H320v64h576zM224 192H128v64h96zM320 480h576v64H320zM128 480h96v64H128zM320 768h576v64H320zM128 768h96v64H128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBulletpoint.defaultProps = {
  size: 18,
};

IconBulletpoint = React.memo ? React.memo(IconBulletpoint) : IconBulletpoint;

export default IconBulletpoint;
