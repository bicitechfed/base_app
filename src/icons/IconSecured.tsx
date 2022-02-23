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

let IconSecured: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M466.368 626.944l228.8-228.864-45.248-45.248-183.552 183.552L360.96 431.04l-45.248 45.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M153.408 119.488v448c0 90.624 47.616 174.656 125.312 221.248l226.688 136.064 226.752-136.064a258.048 258.048 0 0 0 125.312-221.248v-448h-704z m64 448v-384h576v384a194.048 194.048 0 0 1-94.208 166.4l-193.792 116.288-193.728-116.288a194.048 194.048 0 0 1-94.272-166.4z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSecured.defaultProps = {
  size: 18,
};

IconSecured = React.memo ? React.memo(IconSecured) : IconSecured;

export default IconSecured;
