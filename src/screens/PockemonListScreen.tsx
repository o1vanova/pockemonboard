import {observer} from 'mobx-react';
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useStore} from '../hooks/useStore';
import {PockemonLightCrad} from '../components/PockemonLightCard';
import {PockemonModel} from '../stores/PockemonStore';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});

export const PockemonListScreen = observer(
  ({navigation}: {navigation: any}) => {
    const store = useStore();

    const onPressCard = (name: string) => {
      navigation.navigate('PockemonDetailScreen', {name: name});
    };

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {store.pockemons.map((pockemon: PockemonModel, index: number) => {
          return (
            <PockemonLightCrad
              key={index}
              pockemon={pockemon}
              onPress={onPressCard}
            />
          );
        })}
      </ScrollView>
    );
  },
);
