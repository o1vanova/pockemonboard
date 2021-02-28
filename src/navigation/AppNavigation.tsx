import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {PockemonListScreen} from '../screens/PockemonListScreen';
import {PockemonDetailScreen} from '../screens/PockemonDetailScreen';
import {FavoritesScreen} from '../screens/FavoritesScreen';
import {TabBar, TabBarProps} from '../components/TabBar';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pockemons" component={PockemonListScreen} />
      <Stack.Screen
        name="PockemonDetailScreen"
        options={({route}: any) => ({
          title: route?.params?.name,
        })}
        component={PockemonDetailScreen}
      />
    </Stack.Navigator>
  );
}

function FavoriteStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={(props: TabBarProps) => <TabBar {...props} />}>
        <Tab.Screen name="Pockemons" component={HomeStack} />
        <Tab.Screen name="My favorites" component={FavoriteStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
