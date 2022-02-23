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

let IconChevronUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M826.88 605.44l-58.88 58.816-226.56-226.56-226.56 226.56-58.88-58.88L541.44 320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChevronUp.defaultProps = {
  size: 18,
};

IconChevronUp = React.memo ? React.memo(IconChevronUp) : IconChevronUp;

export default IconChevronUp;
