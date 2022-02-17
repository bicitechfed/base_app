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

let IconGongyi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M880.0256 304.9984h-256V192a31.9488 31.9488 0 0 0-32.0512-32H184.064v-39.9872a8.0384 8.0384 0 0 0-7.9872-7.9872H119.9616a8.0384 8.0384 0 0 0-7.9872 7.9872v783.9744c0 4.4032 3.584 8.0384 7.9872 8.0384h56.0128c4.352 0 7.9872-3.584 7.9872-8.0384V640h248.0128v112.9984c0 17.7152 14.2848 32 31.9488 32h416.0512c17.664 0 32-14.336 32-32V336.9984a31.9488 31.9488 0 0 0-32-32zM184.0128 568.0128V231.936h367.9744v336.0256H184.0128z m655.9744 144.9984H504.0128V640h111.9744c4.4032 0 7.9872-3.584 7.9872-7.9872v-254.976h216.064v335.9744z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconGongyi.defaultProps = {
  size: 18,
};

IconGongyi = React.memo ? React.memo(IconGongyi) : IconGongyi;

export default IconGongyi;
