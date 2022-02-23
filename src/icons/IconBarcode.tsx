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

let IconBarcode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 128v768H128V128h128z m640 0v768h-128V128h128z m-192 0v768h-64V128h64zM576 128v768H448V128h128zM384 128v768H320V128h64z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBarcode.defaultProps = {
  size: 18,
};

IconBarcode = React.memo ? React.memo(IconBarcode) : IconBarcode;

export default IconBarcode;
