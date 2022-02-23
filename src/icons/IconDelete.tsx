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

let IconDelete: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M384 768V384h64v384zM576 384v384h64V384z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M672 192H896v64h-64v640a64 64 0 0 1-64 64H256a64 64 0 0 1-64-64V256H128V192h224V115.2a51.2 51.2 0 0 1 51.2-51.2h217.6a51.2 51.2 0 0 1 51.2 51.2V192z m-256 0h192V128h-192v64zM256 256v640h512V256H256z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconDelete.defaultProps = {
  size: 18,
};

IconDelete = React.memo ? React.memo(IconDelete) : IconDelete;

export default IconDelete;
