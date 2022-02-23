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

let IconTools: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M589.952 490.432l35.968 9.92c63.936 17.664 133.632 1.6 182.144-46.912a185.856 185.856 0 0 0 51.648-160.32l-67.584 67.648a96 96 0 0 1-135.744 0l-27.2-27.2a96 96 0 0 1 0-135.68l67.648-67.648a185.856 185.856 0 0 0-160.32 51.648 186.368 186.368 0 0 0-46.912 182.144l9.856 35.904L128 771.456l90.496 90.496 371.456-371.52z m159.616-412.928c21.12 7.04 41.536 17.024 60.672 29.824l-135.808 135.744a32 32 0 0 0 0 45.248l27.2 27.2a32 32 0 0 0 45.248 0l135.744-135.808c12.8 19.2 22.72 39.552 29.824 60.672 29.824 88.32 10.24 188.928-59.136 258.304a250.368 250.368 0 0 1-244.48 63.36l-345.088 345.152a64 64 0 0 1-90.496 0L82.752 816.64a64 64 0 0 1 0-90.56l345.152-345.088a250.368 250.368 0 0 1 63.36-244.48c69.376-69.312 169.984-88.96 258.304-59.072z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconTools.defaultProps = {
  size: 18,
};

IconTools = React.memo ? React.memo(IconTools) : IconTools;

export default IconTools;
