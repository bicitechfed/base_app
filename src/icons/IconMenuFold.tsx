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

let IconMenuFold: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M128 256l768 0.896v-64L128.128 192zM480 544.896H896v-64H480zM128 832l768 0.896v-64L128.128 768zM381.888 486.848a32 32 0 0 1 0 51.2l-202.624 152a32 32 0 0 1-51.2-25.6v-304a32 32 0 0 1 51.2-25.6l202.624 152z m-189.824-62.4v176l117.312-88L192 424.448z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconMenuFold.defaultProps = {
  size: 18,
};

IconMenuFold = React.memo ? React.memo(IconMenuFold) : IconMenuFold;

export default IconMenuFold;
