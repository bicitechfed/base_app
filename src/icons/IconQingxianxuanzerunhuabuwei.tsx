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

let IconQingxianxuanzerunhuabuwei: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M874.666667 149.333333C776.533333 51.2 648.533333 0 512 0S247.466667 51.2 149.333333 149.333333 0 375.466667 0 512s51.2 264.533333 149.333333 362.666667S375.466667 1024 512 1024s264.533333-51.2 362.666667-149.333333S1024 648.533333 1024 512s-51.2-264.533333-149.333333-362.666667zM554.666667 725.333333c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667v-256c0-25.6 17.066667-42.666667 42.666667-42.666666s42.666667 17.066667 42.666667 42.666666v256z m0-405.333333c0 25.6-17.066667 42.666667-42.666667 42.666667s-42.666667-17.066667-42.666667-42.666667V298.666667c0-25.6 17.066667-42.666667 42.666667-42.666667s42.666667 17.066667 42.666667 42.666667v21.333333z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

IconQingxianxuanzerunhuabuwei.defaultProps = {
  size: 18,
};

IconQingxianxuanzerunhuabuwei = React.memo ? React.memo(IconQingxianxuanzerunhuabuwei) : IconQingxianxuanzerunhuabuwei;

export default IconQingxianxuanzerunhuabuwei;
