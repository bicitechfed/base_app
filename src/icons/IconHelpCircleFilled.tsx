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

let IconHelpCircleFilled: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M960 512A448 448 0 1 0 64 512a448 448 0 0 0 896 0zM371.712 424.384c0-77.312 62.912-140.224 140.288-140.224s140.224 62.912 140.224 140.224c0 62.08-47.488 110.144-94.976 129.536a21.632 21.632 0 0 0-13.248 20.16v51.008h-64V574.08c0-35.84 21.696-66.496 52.864-79.36l0.192-0.064c31.68-12.864 55.168-42.048 55.168-70.272 0-41.984-34.24-76.224-76.224-76.224-42.048 0-76.288 34.24-76.288 76.224h-64z m106.56 290.688a33.728 33.728 0 1 1 67.456 0 33.728 33.728 0 0 1-67.456 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHelpCircleFilled.defaultProps = {
  size: 18,
};

IconHelpCircleFilled = React.memo ? React.memo(IconHelpCircleFilled) : IconHelpCircleFilled;

export default IconHelpCircleFilled;
