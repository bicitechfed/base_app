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

let IconLogoAndroid: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M385.6 536.256a42.88 42.88 0 1 1 85.888 0 42.88 42.88 0 0 1-85.888 0zM686.08 493.312a42.88 42.88 0 1 0 0 85.824 42.88 42.88 0 0 0 0-85.824z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M193.536 256l107.52 107.52a427.456 427.456 0 0 1 256.256-84.864c96.064 0 184.768 31.552 256.32 84.8L921.152 256l45.184 45.248-104.256 104.32a427.904 427.904 0 0 1 124.608 302.4v42.88H128v-42.88a427.904 427.904 0 0 1 124.608-302.4l-104.32-104.32L193.536 256z m-0.96 430.912h729.472a365.376 365.376 0 0 0-729.472 0z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoAndroid.defaultProps = {
  size: 18,
};

IconLogoAndroid = React.memo ? React.memo(IconLogoAndroid) : IconLogoAndroid;

export default IconLogoAndroid;
