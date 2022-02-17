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

let IconGuanbi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M950.857143 36.571429a36.571429 36.571429 0 0 1 36.571428 36.571428v877.714286a36.571429 36.571429 0 0 1-36.571428 36.571428H365.714286a36.571429 36.571429 0 0 1-36.571429-36.571428v-146.285714a36.571429 36.571429 0 1 1 73.142857 0v109.714285h512v-804.571428h-512V219.428571a36.571429 36.571429 0 0 1-73.142857 0V73.142857A36.571429 36.571429 0 0 1 365.714286 36.571429h585.142857zM245.028571 340.114286a36.205714 36.205714 0 0 1 0 51.2L161.28 475.428571H621.714286a36.571429 36.571429 0 0 1 0 73.142858H161.426286L245.028571 632.685714a35.108571 35.108571 0 0 1 0 51.2 34.377143 34.377143 0 0 1-25.6 10.971429 34.377143 34.377143 0 0 1-25.6-10.971429l-146.285714-146.285714a35.108571 35.108571 0 0 1 0-51.2l146.285714-146.285714a36.205714 36.205714 0 0 1 51.2 0z"
        fill={getIconColor(color, 0, '#FFFFFF')}
      />
    </Svg>
  );
};

IconGuanbi.defaultProps = {
  size: 18,
};

IconGuanbi = React.memo ? React.memo(IconGuanbi) : IconGuanbi;

export default IconGuanbi;
