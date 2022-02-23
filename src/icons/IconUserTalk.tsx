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

let IconUserTalk: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M852.992 471.296a256 256 0 0 0 0-362.048L898.304 64a320 320 0 0 1 0 452.544l-45.312-45.248zM704 290.304a224 224 0 1 1-448 0 224 224 0 0 1 448 0z m-64 0a160 160 0 1 0-320 0 160 160 0 0 0 320 0zM861.632 664.832a61.44 61.44 0 0 1 34.368 55.808v145.664a32 32 0 0 1-32 32h-768a32 32 0 0 1-32-32V720.64a61.44 61.44 0 0 1 34.368-55.808A882.24 882.24 0 0 1 480 578.304c136.512 0 265.6 31.168 381.632 86.528zM480 642.304c-125.888 0-244.864 28.48-352 79.36v112.64h704v-112.64a818.24 818.24 0 0 0-352-79.36z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M762.496 199.744a128 128 0 0 1 0 181.056l45.248 45.248a192 192 0 0 0 0-271.552l-45.248 45.248z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconUserTalk.defaultProps = {
  size: 18,
};

IconUserTalk = React.memo ? React.memo(IconUserTalk) : IconUserTalk;

export default IconUserTalk;
