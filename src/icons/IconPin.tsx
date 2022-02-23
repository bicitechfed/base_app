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

let IconPin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M797.44 75.264a38.4 38.4 0 0 0-51.84-2.24L486.72 291.52l-49.408-49.28a38.4 38.4 0 0 0-54.272 0L248.32 376.832a38.4 38.4 0 0 0 0 54.272l142.592 142.592L128 836.608l45.248 45.312 262.912-262.912 142.528 142.528a38.4 38.4 0 0 0 54.336 0l134.656-134.656a38.4 38.4 0 0 0 0-54.336l-49.28-49.344 218.432-258.88a38.4 38.4 0 0 0-2.176-51.904L797.44 75.264z m-28.544 61.888l103.872 103.872-241.28 285.824 72.832 72.832-98.496 98.56L311.68 403.968l98.56-98.496 72.768 72.832 285.888-241.28z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPin.defaultProps = {
  size: 18,
};

IconPin = React.memo ? React.memo(IconPin) : IconPin;

export default IconPin;
