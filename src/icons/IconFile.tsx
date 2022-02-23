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

let IconFile: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M255.68 64C225.28 64 192 85.568 192 123.008v777.984c0 37.44 33.28 59.008 63.68 59.008h576.64c30.4 0 63.68-21.568 63.68-59.008v-535.68A64 64 0 0 0 877.248 320L640 82.752A64 64 0 0 0 594.752 64H255.68zM576 128v256.832h256V896H256V128h320z m64 45.248l147.584 147.584H640V173.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFile.defaultProps = {
  size: 18,
};

IconFile = React.memo ? React.memo(IconFile) : IconFile;

export default IconFile;
