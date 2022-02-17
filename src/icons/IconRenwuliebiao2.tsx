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

let IconRenwuliebiao2: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M149.3504 789.3504a21.3504 21.3504 0 0 0-21.3504 21.2992v21.3504c0 11.776 9.5744 21.3504 21.3504 21.3504h725.2992c11.776 0 21.3504-9.5744 21.3504-21.3504v-21.3504a21.3504 21.3504 0 0 0-21.3504-21.2992H149.3504z m298.6496-202.7008a21.3504 21.3504 0 0 0-21.3504 21.3504v21.3504c0 11.776 9.5744 21.2992 21.3504 21.2992h426.6496c11.776 0 21.3504-9.5232 21.3504-21.2992v-21.3504a21.3504 21.3504 0 0 0-21.3504-21.3504H448z m-308.992-200.704a8.8576 8.8576 0 0 0-14.4384 6.912v246.1696c0 7.424 8.6016 11.52 14.4384 6.912l156.2624-123.0848a8.704 8.704 0 0 0 0-13.824z m308.992-12.5952a21.3504 21.3504 0 0 0-21.3504 21.2992v21.3504c0 11.776 9.5744 21.3504 21.3504 21.3504h426.6496c11.776 0 21.3504-9.5744 21.3504-21.3504v-21.3504a21.3504 21.3504 0 0 0-21.3504-21.2992H448zM149.3504 170.6496a21.3504 21.3504 0 0 0-21.3504 21.3504v21.3504c0 11.776 9.5744 21.2992 21.3504 21.2992h725.2992c11.776 0 21.3504-9.5232 21.3504-21.2992V192a21.3504 21.3504 0 0 0-21.3504-21.3504H149.3504z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconRenwuliebiao2.defaultProps = {
  size: 18,
};

IconRenwuliebiao2 = React.memo ? React.memo(IconRenwuliebiao2) : IconRenwuliebiao2;

export default IconRenwuliebiao2;
