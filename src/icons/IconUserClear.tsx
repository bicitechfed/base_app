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

let IconUserClear: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M480 512a224 224 0 1 0 0-448 224 224 0 0 0 0 448z m0-64a160 160 0 1 1 0-320 160 160 0 0 1 0 320zM640 655.68A819.584 819.584 0 0 0 480 640c-125.888 0-244.864 28.544-352 79.36V832h512v64H96a32 32 0 0 1-32-32v-145.6a61.44 61.44 0 0 1 34.368-55.808A882.24 882.24 0 0 1 480 576c54.656 0 108.16 4.992 160 14.528v65.152zM697.856 882.752l101.76-101.824-101.76-101.824 45.248-45.248 101.76 101.76 101.888-101.76 45.248 45.248-101.824 101.824 101.76 101.76-45.184 45.312-101.824-101.76-101.824 101.76z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconUserClear.defaultProps = {
  size: 18,
};

IconUserClear = React.memo ? React.memo(IconUserClear) : IconUserClear;

export default IconUserClear;
