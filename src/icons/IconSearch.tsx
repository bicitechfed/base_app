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

let IconSearch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M624.64 670.016a304.896 304.896 0 1 1 45.312-45.312L896 850.56l-45.312 45.376-226.048-225.984z m49.088-237.12a240.832 240.832 0 1 0-481.6 0 240.832 240.832 0 0 0 481.6 0z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconSearch.defaultProps = {
  size: 18,
};

IconSearch = React.memo ? React.memo(IconSearch) : IconSearch;

export default IconSearch;
