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

let IconFileImage: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M255.68 64C225.28 64 192 85.568 192 123.008v777.984c0 37.44 33.28 59.008 63.68 59.008h571.776c30.4 0 63.68-21.568 63.68-59.008V365.056a64 64 0 0 0-18.304-44.8L640.256 83.2A64 64 0 0 0 594.56 64H255.68zM256 727.296V128h320v256.64h251.136v273.792L704 535.296l-192 192-128-128-128 128z m0 81.408l128-128L471.296 768l-128 128H256v-87.296z m448-192l123.136 123.2V896H424.704L704 616.704z m79.488-296.128H640V174.336l143.488 146.24z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFileImage.defaultProps = {
  size: 18,
};

IconFileImage = React.memo ? React.memo(IconFileImage) : IconFileImage;

export default IconFileImage;
