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

let IconBooks: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 593.92l-256 179.2V192h512v581.12l-256-179.2z m0 78.08l269.632 188.8a32 32 0 0 0 50.368-26.24V192a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64v642.56a32 32 0 0 0 50.368 26.24L512 672z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconBooks.defaultProps = {
  size: 18,
};

IconBooks = React.memo ? React.memo(IconBooks) : IconBooks;

export default IconBooks;
