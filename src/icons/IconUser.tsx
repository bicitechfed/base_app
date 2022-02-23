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

let IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 288a224 224 0 1 1-448 0 224 224 0 0 1 448 0z m-64 0a160 160 0 1 0-320 0 160 160 0 0 0 320 0zM925.632 662.592a61.44 61.44 0 0 1 34.368 55.808V864a32 32 0 0 1-32 32h-768a32 32 0 0 1-32-32v-145.6a61.44 61.44 0 0 1 34.368-55.808A882.24 882.24 0 0 1 544 576c136.512 0 265.6 31.168 381.632 86.592zM544 640c-125.888 0-244.864 28.544-352 79.36V832h704v-112.64A818.24 818.24 0 0 0 544 640z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

IconUser = React.memo ? React.memo(IconUser) : IconUser;

export default IconUser;
