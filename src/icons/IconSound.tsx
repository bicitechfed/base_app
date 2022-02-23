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

let IconSound: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 679.552l271.488 162.88a32 32 0 0 0 48.512-27.392V160a32 32 0 0 0-48.512-27.456L224 295.552H102.656a38.4 38.4 0 0 0-38.4 38.4L64 641.088a38.4 38.4 0 0 0 38.4 38.4h121.6z m64-347.776l192-115.2v541.888l-192-115.2V331.776z m-64 283.776H128l0.256-256H224v256zM832.96 342.08a383.36 383.36 0 0 0-89.216-124.544l43.648-46.784a447.36 447.36 0 0 1 104.064 145.28c24.128 54.4 36.48 112.64 36.48 171.52 0 58.816-12.352 117.12-36.48 171.392-24.128 54.4-59.52 103.744-104.064 145.344l-43.648-46.72a383.36 383.36 0 0 0 89.216-124.544c20.48-46.272 31.04-95.68 31.04-145.472s-10.496-99.2-31.04-145.472z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M704 487.552c0-55.872-23.04-112.256-68.672-157.056l44.864-45.632c57.28 56.256 87.872 128.832 87.808 202.752-0.064 73.92-30.784 146.432-88.192 202.624l-44.8-45.696C680.832 599.68 704 543.36 704 487.552z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSound.defaultProps = {
  size: 18,
};

IconSound = React.memo ? React.memo(IconSound) : IconSound;

export default IconSound;
