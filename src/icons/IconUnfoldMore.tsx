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

let IconUnfoldMore: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M770.816 438.72L537.536 202.88 304.32 438.72l-45.504-44.992 251.456-254.336a38.4 38.4 0 0 1 54.592 0l251.456 254.336-45.504 44.992zM773.888 587.072l-236.352 236.288-236.288-236.288L256 632.32l254.4 254.4a38.4 38.4 0 0 0 54.336 0l254.4-254.4-45.248-45.248z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconUnfoldMore.defaultProps = {
  size: 18,
};

IconUnfoldMore = React.memo ? React.memo(IconUnfoldMore) : IconUnfoldMore;

export default IconUnfoldMore;
