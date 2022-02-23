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

let IconChat: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M296.832 672H832V256H192v503.36L296.832 672z m-137.344 197.76A19.2 19.2 0 0 1 128 855.04V256a64 64 0 0 1 64-64h640a64 64 0 0 1 64 64v416a64 64 0 0 1-64 64H320l-160.512 133.76z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconChat.defaultProps = {
  size: 18,
};

IconChat = React.memo ? React.memo(IconChat) : IconChat;

export default IconChat;
