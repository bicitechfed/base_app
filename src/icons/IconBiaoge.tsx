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

let IconBiaoge: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 170.666667a42.666667 42.666667 0 0 1 42.666667 42.666666v597.333334a42.666667 42.666667 0 0 1-42.666667 42.666666H128a42.666667 42.666667 0 0 1-42.666667-42.666666V213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h768zM352 629.290667H149.333333V789.333333h202.666667v-160.042666z m256 0h-192V789.333333h192v-160.042666z m266.666667-224h-202.666667v160l202.666667 0.042666v64l-202.666667-0.042666V789.333333h202.666667V405.290667z m-266.666667 160v-160h-192v160h192z m-256-160H149.333333v160h202.666667v-160zM874.666667 234.666667h-725.333334v106.624h725.333334V234.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconBiaoge.defaultProps = {
  size: 18,
};

IconBiaoge = React.memo ? React.memo(IconBiaoge) : IconBiaoge;

export default IconBiaoge;
