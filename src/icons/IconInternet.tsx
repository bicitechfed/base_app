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

let IconInternet: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M64 505.6a441.6 441.6 0 1 1 883.2 0v12.8A441.6 441.6 0 1 1 64 518.4v-12.8z m818.368 38.4h-192a631.232 631.232 0 0 1-125.184 347.328A377.728 377.728 0 0 0 882.368 544z m-192-64h192A377.792 377.792 0 0 0 565.12 132.672 631.232 631.232 0 0 1 690.368 480z m-64.128 0A567.36 567.36 0 0 0 505.6 160.192 567.36 567.36 0 0 0 384.896 480h241.344z m-305.408 64h-192a377.728 377.728 0 0 0 317.184 347.328A631.296 631.296 0 0 1 320.832 544z m0-64a631.296 631.296 0 0 1 125.184-347.328A377.728 377.728 0 0 0 128.832 480h192z m305.408 64h-241.28A567.36 567.36 0 0 0 505.6 863.808 567.36 567.36 0 0 0 626.24 544z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconInternet.defaultProps = {
  size: 18,
};

IconInternet = React.memo ? React.memo(IconInternet) : IconInternet;

export default IconInternet;
