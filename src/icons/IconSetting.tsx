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

let IconSetting: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M707.968 496a192 192 0 1 1-384 0 192 192 0 0 1 384 0z m-64 0a128 128 0 1 0-256 0 128 128 0 0 0 256 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M515.968 64l387.968 216v432L515.968 928 128 712v-432L515.968 64zM192 317.632v356.736l323.968 180.352 323.968-180.352V317.632L515.968 137.28 192 317.632z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSetting.defaultProps = {
  size: 18,
};

IconSetting = React.memo ? React.memo(IconSetting) : IconSetting;

export default IconSetting;
