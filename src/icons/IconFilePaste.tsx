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

let IconFilePaste: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736 736h-384v64h384z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M192 123.008C192 85.568 225.28 64 255.68 64h339.072a64 64 0 0 1 45.248 18.752L877.248 320a64 64 0 0 1 18.752 45.248v535.744c0 37.44-33.28 59.008-63.68 59.008h-576.64C225.28 960 192 938.432 192 900.992V123.008zM256 128v768h576V384.832H576V128H256z m384 192.832h147.584L640 173.248v147.584z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFilePaste.defaultProps = {
  size: 18,
};

IconFilePaste = React.memo ? React.memo(IconFilePaste) : IconFilePaste;

export default IconFilePaste;
