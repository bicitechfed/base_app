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

let IconBrowse: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M696.32 544a184.32 184.32 0 1 1-368.64 0 184.32 184.32 0 0 1 368.64 0z m-64 0a120.32 120.32 0 1 0-240.64 0 120.32 120.32 0 0 0 240.64 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M71.488 558.72C157.44 727.68 326.528 832 512.32 832c185.152 0 354.176-104.32 440.192-273.28L960 544l-7.488-14.72C866.56 360.96 697.472 256 512.32 256 326.528 256 157.44 360.96 71.488 529.28L64 544l7.488 14.72zM512.32 768C355.2 768 212.416 682.88 135.04 544 212.416 405.12 355.2 320 512.32 320c156.48 0 299.264 85.12 377.216 224-77.312 138.88-220.736 224-377.216 224z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBrowse.defaultProps = {
  size: 18,
};

IconBrowse = React.memo ? React.memo(IconBrowse) : IconBrowse;

export default IconBrowse;
