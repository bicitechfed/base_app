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

let IconWeishoucang: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1026 1024" width={size} height={size} {...rest}>
      <Path
        d="M490.258673 57.645176c-31.924706 0-62.524235 18.432-82.823529 59.572706L334.309496 265.336471c-13.613176 27.527529-54.272 57.103059-84.690823 61.500235l-163.418353 23.732706C40.843144 357.195294 13.797496 380.687059 3.918908 410.985412c-9.818353 30.358588-1.746824 65.174588 31.081412 97.159529l118.302118 115.290353c21.985882 21.443765 37.526588 69.270588 32.286117 99.508706l-27.888941 162.816c-6.083765 35.538824 1.325176 64.030118 18.251294 84.088471 27.105882 32.165647 72.764235 35.84 115.772236 13.251764l146.191058-76.860235c25.298824-13.251765 79.329882-13.251765 104.688942 0l146.191058 76.860235c18.251294 9.637647 36.382118 14.637176 54.031059 14.637177a79.510588 79.510588 0 0 0 61.680941-27.828706c16.926118-20.058353 24.395294-48.609882 18.251294-84.148706l-27.888941-162.816c-5.180235-30.238118 10.360471-78.064941 32.346353-99.508706l118.241883-115.290353c32.828235-32.045176 40.96-66.800941 31.081411-97.159529C966.599379 380.687059 939.613967 357.195294 894.317026 350.569412l-163.418353-23.732706c-30.418824-4.397176-71.077647-33.972706-84.690824-61.500235L573.082202 117.217882c-20.299294-41.140706-50.959059-59.632941-82.823529-59.632941z m0 60.235295c9.276235 0 18.793412 5.722353 28.792471 26.021647l73.065411 148.058353c22.407529 45.357176 80.052706 87.220706 130.048 94.509176l163.418353 23.732706c22.407529 3.252706 30.780235 10.541176 33.731765 19.395765 2.770824 8.854588 0.301176 19.636706-15.902118 35.418353l-118.241882 115.290353c-36.141176 35.297882-58.187294 103.002353-49.633882 152.816941l27.888941 162.816c3.132235 18.251294 0.361412 28.792471-4.939294 35.117176a19.516235 19.516235 0 0 1-15.661177 6.445177 57.825882 57.825882 0 0 1-26.021647-7.710118L570.612555 852.931765c-42.887529-22.528-117.820235-22.467765-160.707764 0L263.653496 929.792c-20.058353 10.541176-34.936471 9.336471-41.743058 1.204706-5.300706-6.264471-8.011294-16.805647-4.879059-35.056941l27.888941-162.816c8.553412-49.814588-13.432471-117.519059-49.633882-152.816941L77.044555 465.016471c-16.203294-15.781647-18.672941-26.624-15.781647-35.538824 2.831059-8.734118 11.203765-16.022588 33.611294-19.275294l163.418353-23.732706c49.995294-7.228235 107.640471-49.152 130.048-94.448941l73.065412-148.178824c10.059294-20.239059 19.576471-25.961412 28.852706-25.961411z"
        fill={getIconColor(color, 0, '#F7B500')}
      />
    </Svg>
  );
};

IconWeishoucang.defaultProps = {
  size: 18,
};

IconWeishoucang = React.memo ? React.memo(IconWeishoucang) : IconWeishoucang;

export default IconWeishoucang;