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

let IconPrevious: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 896H192V128h64zM329.536 538.88a32 32 0 0 1 0-53.76L782.656 192a32 32 0 0 1 49.344 26.88v586.24a32 32 0 0 1-49.408 26.88l-453.12-293.12zM768 746.368V277.632L405.76 512 768 746.368z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPrevious.defaultProps = {
  size: 18,
};

IconPrevious = React.memo ? React.memo(IconPrevious) : IconPrevious;

export default IconPrevious;
