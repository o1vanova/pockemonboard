import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useStore} from '../hooks/useStore';
import {PockemonFullCrad} from '../components/PockemonFullCard';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  button: {
    padding: 10,
  },
});

export const PockemonDetailScreen = ({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}): any => {
  const store = useStore();
  const {name} = route.params;
  const pockemon = store.getByName(name);

  if (pockemon) {
    return (
      <View style={styles.container}>
        <PockemonFullCrad pockemon={pockemon} />
        <View style={styles.button}>
          <Button title="Go home" onPress={() => navigation.goBack()} />
        </View>
      </View>
    );
  } else {
    <View>
      <Text>Not found</Text>
    </View>;
  }
};
