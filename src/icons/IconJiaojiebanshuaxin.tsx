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

let IconJiaojiebanshuaxin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M511.488365 0A511.049822 511.049822 0 0 0 1.09636 510.611278a511.049822 511.049822 0 0 0 510.392005 510.392005 511.049822 511.049822 0 0 0 510.465097-510.392005A511.049822 511.049822 0 0 0 511.488365 0z m-2.923626 786.309208a261.883797 261.883797 0 0 1-245.292219-171.397573l0.365453-0.146182a33.694789 33.694789 0 0 1-3.800714-15.129764 34.060243 34.060243 0 1 1 66.731763-10.525054l0.438544-0.146181a192.959315 192.959315 0 0 0 181.557173 128.493362 193.032405 193.032405 0 0 0 192.813134-192.813134 193.032405 193.032405 0 0 0-192.813134-192.886224c-23.389008 0-45.535475 4.604711-66.220128 12.206139l24.266096 46.558743a17.176303 17.176303 0 0 1 4.53162 11.694504c0 9.574875-9.501784 17.030121-17.541756 17.176303h-1.023269l-171.982298-7.309065a17.176303 17.176303 0 0 1-13.814133-26.531906L359.240542 240.322056a17.176303 17.176303 0 0 1 29.747895 1.315631l21.196288 40.711492c30.478801-12.42541 63.588865-19.369022 98.453105-19.369022a261.956888 261.956888 0 0 1 261.664525 261.664525 261.956888 261.956888 0 0 1-261.664525 261.664526z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconJiaojiebanshuaxin.defaultProps = {
  size: 18,
};

IconJiaojiebanshuaxin = React.memo ? React.memo(IconJiaojiebanshuaxin) : IconJiaojiebanshuaxin;

export default IconJiaojiebanshuaxin;
