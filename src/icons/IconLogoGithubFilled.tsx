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

let IconLogoGithubFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.64 64 64 269.632 64 523.328c0 202.944 128.384 375.104 306.368 435.84 22.4 4.288 29.632-9.984 29.632-22.08v-85.504c-124.608 27.776-150.592-54.208-150.592-54.208-20.352-53.12-49.728-67.2-49.728-67.2-40.64-28.544 3.072-27.904 3.072-27.904 44.992 3.2 68.672 47.36 68.672 47.36 39.936 70.208 104.768 49.92 130.368 38.144 3.968-29.632 15.616-49.92 28.416-61.44-99.456-11.648-204.096-51.008-204.096-226.944 0-50.24 17.536-91.136 46.144-123.328-4.608-11.584-19.968-58.304 4.416-121.6 0 0 37.632-12.288 123.2 47.104A419.712 419.712 0 0 1 512 286.144a420.992 420.992 0 0 1 112.192 15.424c85.568-59.392 123.136-47.04 123.136-47.04 24.32 63.232 8.96 110.016 4.416 121.6 28.736 32.128 46.08 73.088 46.08 123.264 0 176.384-104.768 215.232-204.544 226.56 16 14.272 30.72 42.24 30.72 85.12v126.08c0 12.16 7.168 26.496 29.888 22.016 177.92-60.8 306.112-232.96 306.112-435.84C960 269.632 759.424 64 512 64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconLogoGithubFilled.defaultProps = {
  size: 18,
};

IconLogoGithubFilled = React.memo ? React.memo(IconLogoGithubFilled) : IconLogoGithubFilled;

export default IconLogoGithubFilled;
