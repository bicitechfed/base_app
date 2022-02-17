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

let IconPiliangyingyong: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 288V853.333333a42.666667 42.666667 0 0 1-42.666667 42.666667H288v-64H832V288H896zM725.333333 128a42.666667 42.666667 0 0 1 42.666667 42.666667v554.666666a42.666667 42.666667 0 0 1-42.666667 42.666667H170.666667a42.666667 42.666667 0 0 1-42.666667-42.666667V170.666667a42.666667 42.666667 0 0 1 42.666667-42.666667h554.666666z m-21.333333 64h-512v512h512v-512z m-78.250667 121.728l15.061334 15.061333a21.333333 21.333333 0 0 1 0 30.165334L391.68 607.488a21.333333 21.333333 0 0 1-30.122667 0l-111.829333-111.616a21.333333 21.333333 0 0 1-0.042667-30.165333l15.104-15.061334a21.333333 21.333333 0 0 1 30.165334 0l81.664 81.493334 218.922666-218.453334a21.333333 21.333333 0 0 1 30.165334 0.042667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPiliangyingyong.defaultProps = {
  size: 18,
};

IconPiliangyingyong = React.memo ? React.memo(IconPiliangyingyong) : IconPiliangyingyong;

export default IconPiliangyingyong;
