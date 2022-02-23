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

let IconCaretRight: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.312 480L384 736v-512l341.312 256z m72.576 25.6a32 32 0 0 0 0-51.2L371.2 134.4a32 32 0 0 0-51.2 25.6v640a32 32 0 0 0 51.2 25.6l426.688-320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCaretRight.defaultProps = {
  size: 18,
};

IconCaretRight = React.memo ? React.memo(IconCaretRight) : IconCaretRight;

export default IconCaretRight;
