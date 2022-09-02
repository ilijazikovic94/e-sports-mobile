import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './navigation/BottomTabNavigator';
import AuthStackNavigator from './navigation/AuthStackNavigator';
import useLinking from './navigation/useLinking';
import Animated from 'react-native-reanimated';
import { navigationRef } from './navigation/RootNavigation';

const Stack = createStackNavigator();

function CustomDrawerContent({ progress, ...rest }) {
    const translateX = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [-100, 0],
    });

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image
                    source={ require('./assets/images/robot-dev.png') }
                    style={{ width: 80, height: 80, resizeMode: 'cover', borderRadius: 500, marginTop: 10}}
                />
            </TouchableOpacity>
        </ScrollView>
    );
}

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const containerRef = React.useRef();
  const { getInitialState } = useLinking(containerRef);

  const Drawer = createDrawerNavigator();

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState());

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
        <NavigationContainer ref={navigationRef}>
          <Drawer.Navigator drawerStyle={{
            backgroundColor: '#212226',
            width: 100,
          }}  drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="Auth" component={AuthStackNavigator} />
            <Drawer.Screen name="Root" component={BottomTabNavigator} />
          </Drawer.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
