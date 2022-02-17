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

let IconBianhao: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M602.688 439.04c-43.52 0-68.416 31.808-68.416 72.64s24.896 72.96 68.416 72.96c43.52 0 68.416-32 68.416-72.96 0-40.832-24.896-72.576-68.48-72.576zM512 8.064a504.064 504.064 0 1 0 0.064 1008.064A504.064 504.064 0 0 0 512 8z m-81.28 637.44c0 3.008-1.088 4.16-5.376 0.768L262.272 512.128v129.472h-65.28V378.368c0-2.24 1.152-4.16 5.376-0.832L365.568 512V381.824h65.28v263.616h-0.064z m171.968-0.448c-74.88 0-139.392-55.04-139.392-133.312 0-78.336 64.576-132.992 139.392-132.992s139.392 54.656 139.392 132.992c0 78.272-64.512 133.312-139.392 133.312z m186.048 0.448a37.44 37.44 0 1 1 0-74.88c19.904 0 38.272 15.232 38.272 37.376a37.696 37.696 0 0 1-38.272 37.504z"
        fill={getIconColor(color, 0, '#096DD9')}
      />
    </Svg>
  );
};

IconBianhao.defaultProps = {
  size: 18,
};

IconBianhao = React.memo ? React.memo(IconBianhao) : IconBianhao;

export default IconBianhao;
