import React from 'react';

import {ButtomTabsNavigator} from './screens/ButtonTabs.navigator';
import {NavigationContainer} from '@react-navigation/native';

export const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ButtomTabsNavigator />
    </NavigationContainer>
  );
};
