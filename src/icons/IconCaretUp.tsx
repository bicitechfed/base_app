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

let IconCaretUp: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 345.024l279.232 356.224H232.768L512 344.96z m27.904-75.648a35.84 35.84 0 0 0-55.808 0L135.04 714.56c-17.28 22.016-0.832 53.44 27.904 53.44h698.112c28.736 0 45.184-31.36 27.904-53.44L539.904 269.44z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCaretUp.defaultProps = {
  size: 18,
};

IconCaretUp = React.memo ? React.memo(IconCaretUp) : IconCaretUp;

export default IconCaretUp;
