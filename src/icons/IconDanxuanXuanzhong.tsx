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

let IconDanxuanXuanzhong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 28.444444a483.555556 483.555556 0 1 1 0 967.111112 483.555556 483.555556 0 0 1 0-967.111112z m0 56.888889a426.666667 426.666667 0 1 0 0 853.333334 426.666667 426.666667 0 0 0 0-853.333334zM512 227.555556a284.444444 284.444444 0 1 1 0 568.888888A284.444444 284.444444 0 0 1 512 227.555556z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconDanxuanXuanzhong.defaultProps = {
  size: 18,
};

IconDanxuanXuanzhong = React.memo ? React.memo(IconDanxuanXuanzhong) : IconDanxuanXuanzhong;

export default IconDanxuanXuanzhong;
