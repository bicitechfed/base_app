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

let IconQrcode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 256H256v128h128z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M160 128a32 32 0 0 0-32 32v320a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32v-320a32 32 0 0 0-32-32h-320zM192 192h256v256H192V192zM672 128a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-192z m32 192V192h128v128h-128zM640 672a32 32 0 0 1 32-32h192a32 32 0 0 1 32 32v192a32 32 0 0 1-32 32h-192a32 32 0 0 1-32-32v-192z m64 160h128v-128h-128v128zM160 640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32v-192a32 32 0 0 0-32-32h-192z m32 64h128v128H192v-128zM896 480h-256v64h256zM544 704v192h-64v-192zM544 640V576h-64v64z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconQrcode.defaultProps = {
  size: 18,
};

IconQrcode = React.memo ? React.memo(IconQrcode) : IconQrcode;

export default IconQrcode;
