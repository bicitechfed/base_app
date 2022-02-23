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

let IconNotification: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M576 129.728V64H512v65.728A288 288 0 0 0 256 416V704l-57.6 76.8a32 32 0 0 0 25.6 51.2h163.2a160 160 0 0 0 313.6 0h163.2a32 32 0 0 0 25.6-51.2L832 704V416a288 288 0 0 0-256-286.272z m-256 595.584V416a224 224 0 1 1 448 0v309.312l32 42.688h-512l32-42.688zM544 896a96 96 0 0 1-90.496-64h181.12A96 96 0 0 1 544 896z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconNotification.defaultProps = {
  size: 18,
};

IconNotification = React.memo ? React.memo(IconNotification) : IconNotification;

export default IconNotification;
