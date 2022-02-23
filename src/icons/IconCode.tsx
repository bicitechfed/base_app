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

let IconCode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M573.184 192L391.04 872l61.824 16.576L635.008 208.576zM138.624 540.288l219.2 219.2-45.248 45.248-237.312-237.312a38.4 38.4 0 0 1 0-54.272L312.576 275.84l45.248 45.248-219.2 219.2zM887.168 540.288l-220.16 217.728 44.928 45.44 238.656-235.84a38.4 38.4 0 0 0 0-54.656L711.936 277.12l-44.992 45.504 220.16 217.728z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconCode.defaultProps = {
  size: 18,
};

IconCode = React.memo ? React.memo(IconCode) : IconCode;

export default IconCode;
