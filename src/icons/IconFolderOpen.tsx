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

let IconFolderOpen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M192 192h251.456L576 297.6h320v-64H598.4L465.792 128H192zM192 297.6a64 64 0 0 0-64 64v486.784a64 64 0 0 0 64 64h704a64 64 0 0 0 64-64V467.264a64 64 0 0 0-64-64H555.2l-132.608-105.6H192z m0 64h208.256l132.544 105.664H896v381.12H192V361.664z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFolderOpen.defaultProps = {
  size: 18,
};

IconFolderOpen = React.memo ? React.memo(IconFolderOpen) : IconFolderOpen;

export default IconFolderOpen;
