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

let IconHeart: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 358.4l68.096-62.464C676.48 207.552 832 275.968 832 406.784c0 39.808-15.872 78.08-44.032 106.24L512 788.992 236.032 513.024A150.336 150.336 0 0 1 192 406.784c0-130.816 155.52-199.232 251.904-110.848L512 358.336z m-24.832-109.632C349.696 122.688 128 220.288 128 406.784c0 56.832 22.592 111.36 62.72 151.552l311.936 311.872c5.12 5.12 13.504 5.12 18.688 0l311.872-311.872c40.192-40.256 62.784-94.72 62.784-151.552 0-186.496-221.696-284.032-359.168-158.08L512 271.616l-24.832-22.784z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconHeart.defaultProps = {
  size: 18,
};

IconHeart = React.memo ? React.memo(IconHeart) : IconHeart;

export default IconHeart;
