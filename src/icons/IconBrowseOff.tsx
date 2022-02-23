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

let IconBrowseOff: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M689.472 770.432l87.872 87.872 45.248-45.248L201.6 192l-45.248 45.248 77.44 77.44a505.664 505.664 0 0 0-162.304 186.24L64 515.648l7.488 14.72c86.016 168.96 255.04 273.28 440.832 273.28 61.696 0 121.6-11.52 177.152-33.28z m-50.048-50.048a427.008 427.008 0 0 1-127.104 19.264c-157.12 0-299.904-85.12-377.216-224a438.72 438.72 0 0 1 144.384-155.2l69.376 69.312a184.32 184.32 0 0 0 248.96 248.96l41.6 41.6z m-241.92-241.92l151.68 151.68a120.32 120.32 0 0 1-151.68-151.68zM952.512 530.368l7.488-14.72-7.488-14.72c-86.016-168.32-255.04-273.28-440.192-273.28-54.784 0-108.16 9.152-158.336 26.368l51.2 51.2a428.736 428.736 0 0 1 107.136-13.568c156.48 0 299.264 85.12 377.216 224a439.552 439.552 0 0 1-129.152 144.704l45.312 45.376a505.216 505.216 0 0 0 146.816-175.36z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M696.32 515.648c0 23.936-4.608 46.784-12.864 67.84L631.296 531.2a120.32 120.32 0 0 0-134.912-134.912l-52.16-52.16a184.32 184.32 0 0 1 252.096 171.456z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBrowseOff.defaultProps = {
  size: 18,
};

IconBrowseOff = React.memo ? React.memo(IconBrowseOff) : IconBrowseOff;

export default IconBrowseOff;
