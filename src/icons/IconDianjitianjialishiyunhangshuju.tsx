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

let IconDianjitianjialishiyunhangshuju: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1126 1024" width={size} height={size} {...rest}>
      <Path
        d="M1048.9344 0A80.9472 80.9472 0 0 1 1126.4 73.3184v878.1824c-3.584 37.888-33.6896 68.096-71.8336 72.4992H76.032A81.152 81.152 0 0 1 0 947.8656V75.6736A80.9984 80.9984 0 0 1 76.544 0zM268.544 507.904c-27.136 0-49.152 21.6576-49.152 48.4864v256a48.896 48.896 0 0 0 49.152 48.4352c27.136 0 49.152-21.6576 49.152-48.4864v-255.9488a48.8448 48.8448 0 0 0-49.152-48.4864z m591.9232-130.2016c-27.136 0-49.152 21.6576-49.152 48.4864v386.1504a48.896 48.896 0 0 0 49.152 48.4864c27.136 0 49.152-21.6576 49.152-48.4864V426.1888a48.8448 48.8448 0 0 0-49.152-48.4864z m-295.936-167.424c-27.0848 0-49.152 21.6064-49.152 48.4864v553.6768c0 26.7264 22.0672 48.384 49.152 48.384 27.136 0 49.2032-21.6576 49.2032-48.4864V258.7648a48.8448 48.8448 0 0 0-49.152-48.4864z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

IconDianjitianjialishiyunhangshuju.defaultProps = {
  size: 18,
};

IconDianjitianjialishiyunhangshuju = React.memo ? React.memo(IconDianjitianjialishiyunhangshuju) : IconDianjitianjialishiyunhangshuju;

export default IconDianjitianjialishiyunhangshuju;
