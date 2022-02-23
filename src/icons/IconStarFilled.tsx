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

let IconStarFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1033 1024" width={size} height={size} {...rest}>
      <Path
        d="M539.048184 257.259968a45.302218 45.302218 0 0 1 81.997014 0l81.543992 173.620749 186.701764 28.540397a45.302218 45.302218 0 0 1 25.595753 76.447492L778.187265 675.79583l31.76818 194.799536a45.302218 45.302218 0 0 1-66.650887 46.887795l-163.314494-90.264668-163.314495 90.264668a45.302218 45.302218 0 0 1-66.650887-46.944423l31.76818-194.799535L245.206676 535.868606a45.302218 45.302218 0 0 1 25.595753-76.447492l186.758392-28.48377L539.048184 257.259968z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M127.024516 113.255544h453.022175v906.044351h-453.022175z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconStarFilled.defaultProps = {
  size: 18,
};

IconStarFilled = React.memo ? React.memo(IconStarFilled) : IconStarFilled;

export default IconStarFilled;
