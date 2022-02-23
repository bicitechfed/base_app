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

let IconPhoto: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M708.352 554.624a192 192 0 1 1-384 0 192 192 0 0 1 384 0z m-64 0a128 128 0 1 0-256 0 128 128 0 0 0 256 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M391.744 170.624a38.4 38.4 0 0 0-31.936 17.088L307.2 266.624H132.992a32.64 32.64 0 0 0-32.64 32.64v542.72c0 18.048 14.592 32.64 32.64 32.64h766.72a32.64 32.64 0 0 0 32.64-32.64v-542.72a32.64 32.64 0 0 0-32.64-32.64h-174.208l-52.608-78.912a38.4 38.4 0 0 0-32-17.088H391.744z m13.76 64H627.2l64 96h177.152v480h-704v-480h177.152l64-96z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPhoto.defaultProps = {
  size: 18,
};

IconPhoto = React.memo ? React.memo(IconPhoto) : IconPhoto;

export default IconPhoto;
