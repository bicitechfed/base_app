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

let IconAControlplatform: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M959.36 294.72l-385.664-222.72a59.968 59.968 0 0 0-60.032 0L128 294.784v445.376c0 21.44 11.456 41.216 30.016 51.968l385.664 222.656 385.728-222.72a59.968 59.968 0 0 0 29.952-51.904V294.72zM543.616 497.728L224 313.152 543.68 128.64l319.744 184.576-319.808 184.576z m32.064 55.488L895.36 368.64v369.088L575.68 922.24V553.216z m-64 0v369.024L192 737.728V368.576l319.744 184.64z"
        fill={getIconColor(color, 0, '#000000')}
      />
    </Svg>
  );
};

IconAControlplatform.defaultProps = {
  size: 18,
};

IconAControlplatform = React.memo ? React.memo(IconAControlplatform) : IconAControlplatform;

export default IconAControlplatform;
