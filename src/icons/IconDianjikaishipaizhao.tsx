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

let IconDianjikaishipaizhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1228 1024" width={size} height={size} {...rest}>
      <Path
        d="M1088.3072 1009.7664H129.1776a100.864 100.864 0 0 1-100.9664-100.6592V229.4784a100.864 100.864 0 0 1 100.9664-100.7104h214.528L406.8352 28.16c0-13.9264 36.5568-25.1904 50.4832-25.1904h302.8992c13.9264 0 50.432 11.264 50.432 25.1904l63.1296 100.6592h214.528c55.808 0 100.9664 45.056 100.9664 100.7104v679.6288a100.864 100.864 0 0 1-100.9664 100.6592zM608.768 229.4784c-181.248 0-328.192 146.4832-328.192 327.168 0 180.736 146.944 327.2704 328.192 327.2704 181.1968 0 328.0896-146.4832 328.0896-327.168v-0.0512c0-180.736-146.8928-327.2192-328.0896-327.2192z m0 553.7792a226.816 226.816 0 0 1-227.1744-226.56 226.816 226.816 0 0 1 227.1744-226.56 226.816 226.816 0 0 1 227.1232 226.56 226.816 226.816 0 0 1-227.1232 226.56z"
        fill={getIconColor(color, 0, '#E0E7F5')}
      />
    </Svg>
  );
};

IconDianjikaishipaizhao.defaultProps = {
  size: 18,
};

IconDianjikaishipaizhao = React.memo ? React.memo(IconDianjikaishipaizhao) : IconDianjikaishipaizhao;

export default IconDianjikaishipaizhao;
