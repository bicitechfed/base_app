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

let IconFileAdd: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 64c-35.584 0-64 28.416-64 64v704c0 35.584 28.416 64 64 64h290.304v-64H256V128h256v256h256v158.976h64V365.248A64 64 0 0 0 813.248 320l-5.248-5.248-0.064-0.128-237.44-237.44a33.792 33.792 0 0 0-18.24-9.472A64 64 0 0 0 530.752 64H256z m466.752 256H576V173.248L722.752 320z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M768 960v-128h-128v-64h128v-128h64v128h128v64h-128v128z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFileAdd.defaultProps = {
  size: 18,
};

IconFileAdd = React.memo ? React.memo(IconFileAdd) : IconFileAdd;

export default IconFileAdd;
