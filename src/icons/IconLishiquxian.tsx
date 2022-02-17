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

let IconLishiquxian: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M736.711111 547.271111a189.44 189.44 0 1 1 0 378.88 189.44 189.44 0 0 1 0-378.88zM126.293333 126.293333c17.436444 0 31.573333 14.136889 31.573334 31.573334l0.056889 209.009777c47.160889-74.951111 101.319111-113.664 163.896888-113.664 53.959111 0 83.683556 28.273778 120.661334 93.582223l18.090666 32.824889c37.973333 68.266667 66.616889 93.980444 119.694223 93.980444 59.534222 0 86.101333-20.337778 110.165333-86.499556l3.584-10.268444 3.584-10.979556 3.584-11.719111 3.640889-12.458666 8.248889-29.724445 3.925333-13.880889 3.783111-12.657777 3.640889-11.576889c1.223111-3.697778 2.389333-7.224889 3.584-10.609778l3.584-9.756445 3.612445-9.045333a211.256889 211.256889 0 0 1 23.523555-42.211555c30.492444-42.808889 74.979556-65.393778 136.163556-65.393778a31.573333 31.573333 0 1 1 0 63.146666c-53.105778 0-79.104 16.753778-101.376 70.371556l-3.697778 9.272889-1.792 4.892444-3.640889 10.353778-1.792 5.432889-3.612444 11.463111-3.640889 12.231111-3.697778 12.999111-4.352 15.900445-4.096 14.535111-1.962667 6.798222-3.811555 12.714667-3.697778 11.662222-3.612445 10.666667c-1.820444 5.12-3.640889 9.955556-5.461333 14.506666l-3.754667 8.817778c-6.371556 14.222222-13.368889 26.197333-22.186666 38.428445-31.004444 43.036444-76.231111 65.735111-138.439111 65.735111-80.014222 0-124.501333-38.087111-171.093334-119.694223l-21.333333-38.570666-5.688889-9.898667c-23.125333-39.082667-38.513778-52.224-60.330667-52.224-56.689778 0-112.782222 62.293333-163.84 194.389333l0.056889 320.682667c0 11.633778 9.443556 21.048889 21.048889 21.048889H536.746667a31.857778 31.857778 0 0 1 31.829333 31.573333 31.288889 31.288889 0 0 1-31.288889 31.573334H137.016889c-23.267556 0-42.097778-18.858667-42.097778-42.097778l-0.142222-366.051556a31.345778 31.345778 0 0 1 0-4.551111L94.72 157.866667c0-17.464889 14.136889-31.573333 31.573333-31.601778zM736.711111 610.417778a126.293333 126.293333 0 1 0 0 252.586666 126.293333 126.293333 0 0 0 0-252.586666z m0 26.936889c13.624889 0 24.832 10.353778 26.168889 23.608889l0.142222 2.702222v62.179555h53.248c13.653333 0 24.832 10.353778 26.168889 23.608889l0.142222 2.702222a26.311111 26.311111 0 0 1-23.608889 26.168889l-2.702222 0.142223H736.711111a26.311111 26.311111 0 0 1-26.168889-23.608889l-0.142222-2.702223v-88.462222c0-14.563556 11.776-26.339556 26.311111-26.339555z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLishiquxian.defaultProps = {
  size: 18,
};

IconLishiquxian = React.memo ? React.memo(IconLishiquxian) : IconLishiquxian;

export default IconLishiquxian;