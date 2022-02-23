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

let IconRootList: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M288 320h448v64h-448zM576 480H288v64H576z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
      <Path
        d="M192 128a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h640a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64H192z m640 64v640H192V192h640z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
        opacity=".9"
      />
    </Svg>
  );
};

IconRootList.defaultProps = {
  size: 18,
};

IconRootList = React.memo ? React.memo(IconRootList) : IconRootList;

export default IconRootList;
