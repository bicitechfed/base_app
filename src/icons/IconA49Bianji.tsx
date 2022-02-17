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

let IconA49Bianji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.666667 832a21.333333 21.333333 0 0 1 21.333333 21.333333v21.333334a21.333333 21.333333 0 0 1-21.333333 21.333333H149.333333a21.333333 21.333333 0 0 1-21.333333-21.333333v-21.333334a21.333333 21.333333 0 0 1 21.333333-21.333333h725.333334zM674.261333 114.24a42.666667 42.666667 0 0 1 60.16-0.213333l114.005334 112.533333 0.128 0.128a42.666667 42.666667 0 0 1 0.106666 60.352L391.552 745.792a21.333333 21.333333 0 0 1-15.125333 6.293333h-144.618667a21.333333 21.333333 0 0 1-21.333333-21.333333v-143.168a21.333333 21.333333 0 0 1 6.250666-15.082667z m30.293334 60.245333L274.474667 605.226667v82.858666h84.202666L788.181333 257.066667l-83.626666-82.56z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconA49Bianji.defaultProps = {
  size: 18,
};

IconA49Bianji = React.memo ? React.memo(IconA49Bianji) : IconA49Bianji;

export default IconA49Bianji;
