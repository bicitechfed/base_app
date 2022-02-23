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

let IconFileWord: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M256 896V128h288v256.832h256V512h64V365.056a64 64 0 0 0-18.304-44.8L613.12 83.2a64 64 0 0 0-45.696-19.2h-311.68C225.28 64 192 85.568 192 123.008v777.984c0 37.44 33.28 59.008 63.68 59.008H480v-64H256z m500.608-575.168H608V169.344l148.608 151.488z"
        fill={getIconColor(color, 0, '#000000')}
        fillOpacity=".9"
      />
      <Path
        d="M543.168 608L624.128 960h53.952l61.056-269.056 61.888 269.056h53.952l79.872-352h-52.48l-54.528 240.256-55.232-240.256h-67.2l-54.4 240.256L595.648 608z"
        fill={getIconColor(color, 1, '#000000')}
        fillOpacity=".9"
      />
    </Svg>
  );
};

IconFileWord.defaultProps = {
  size: 18,
};

IconFileWord = React.memo ? React.memo(IconFileWord) : IconFileWord;

export default IconFileWord;
