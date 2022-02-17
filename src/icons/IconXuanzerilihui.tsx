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

let IconXuanzerilihui: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M872 116.032h-144V80a35.968 35.968 0 1 0-72 0v36.032h-288V80a36.032 36.032 0 0 0-72 0v36.032h-144A67.712 67.712 0 0 0 80 188.032v720a67.648 67.648 0 0 0 72 71.936h720a67.648 67.648 0 0 0 72-71.936V188.032a67.648 67.648 0 0 0-72-72.064z m-432 539.968a35.264 35.264 0 0 1-35.264 35.264h-144a35.264 35.264 0 0 1-36.736-35.264V512c0-19.456 15.808-35.264 35.264-35.264h144A35.264 35.264 0 0 1 440 512v144z m432-324.032H152v-144h144V224a36.032 36.032 0 0 0 72 0v-36.032h288V224a35.968 35.968 0 1 0 72 0v-36.032h144v144z"
        fill={getIconColor(color, 0, '#CDCDCD')}
      />
    </Svg>
  );
};

IconXuanzerilihui.defaultProps = {
  size: 18,
};

IconXuanzerilihui = React.memo ? React.memo(IconXuanzerilihui) : IconXuanzerilihui;

export default IconXuanzerilihui;
