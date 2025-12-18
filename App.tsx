import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InputScreen from './components/InputScreen';
import WeatherDetails from './components/WeatherDetails';

function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={'Home'} component={InputScreen} />
        <Stack.Screen name={'WeatherDetails'} component={WeatherDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
