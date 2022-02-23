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

let IconPlayCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0z m-257.024 14.592L416.64 691.84a16.832 16.832 0 0 1-25.216-14.592V346.688c0-12.992 14.016-21.12 25.216-14.592l286.336 165.312a16.832 16.832 0 0 1 0 29.184z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconPlayCircleFilled.defaultProps = {
  size: 18,
};

IconPlayCircleFilled = React.memo ? React.memo(IconPlayCircleFilled) : IconPlayCircleFilled;

export default IconPlayCircleFilled;
