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

let IconUser2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M789.568 896H230.528A102.528 102.528 0 0 1 128 793.472c0-30.08 13.056-59.008 37.12-77.12 294.272-222.592 568.832-108.224 698.944 0.384 21.44 17.92 31.936 44.928 31.936 72.832 0 58.752-47.68 106.432-106.432 106.432z"
        fill={getIconColor(color, 0, '#181818')}
      />
      <Path
        d="M302.528 337.472a209.472 209.472 0 1 0 418.944 0 209.472 209.472 0 1 0-418.944 0Z"
        fill={getIconColor(color, 1, '#181818')}
      />
    </Svg>
  );
};

IconUser2.defaultProps = {
  size: 18,
};

IconUser2 = React.memo ? React.memo(IconUser2) : IconUser2;

export default IconUser2;
