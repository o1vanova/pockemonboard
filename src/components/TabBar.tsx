import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    borderColor: '#C1C1C1',
    borderWidth: 1,
  },
  tabItem: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  tabTextDefault: {
    color: '#13293D',
    opacity: 0.7,
    fontSize: 16,
  },
  tabTextActive: {
    color: '#13293D',
    fontSize: 22,
  },
});

export const TabBar = (props: TabBarProps) => {
  return (
    <View style={styles.tabContainer}>
      {props.state.routes.map((route: any, index: number) => {
        const {options} = props.descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event = props.navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={`${index}-bottom`}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}>
            <Text
              style={isFocused ? styles.tabTextActive : styles.tabTextDefault}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
