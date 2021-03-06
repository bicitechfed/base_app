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

let IconCaretRightSmall: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 320v384l288-192z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCaretRightSmall.defaultProps = {
  size: 18,
};

IconCaretRightSmall = React.memo ? React.memo(IconCaretRightSmall) : IconCaretRightSmall;

export default IconCaretRightSmall;
