import React from 'react';
import { LogBox } from "react-native";
import { Provider as PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from "./navigations";
import { Provider as StoreProvider } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { store } from "./redux/store";

const App = () => {
  LogBox.ignoreAllLogs();
  
  return (
    <StoreProvider store={store}>
      <PaperProvider settings={{
        icon : props => <Icon {...props} />
      }}>
        <NavigationContainer>
          <Navigator />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
