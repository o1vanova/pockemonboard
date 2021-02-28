import {observer} from 'mobx-react';
import React from 'react';
import {Button, Image, StyleSheet, Text, View} from 'react-native';
import {PockemonModel} from '../stores/PockemonStore';
import API_URL from '../config/config';
import {ScrollView} from 'react-native-gesture-handler';

interface IProps {
  pockemon: PockemonModel;
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    padding: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#13293D',
  },
  logo: {
    width: 150,
    height: 150,
  },
  sectionContainer: {
    flexDirection: 'column',
    backgroundColor: '#3E92CC',
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  sectionTitle: {
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  sectionDescription: {
    color: '#FFFFFF',
  },
  footer: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#18435A',
  },
});

export const PockemonFullCrad = observer((props: IProps) => {
  const state = props.pockemon;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>{state.pockemon.name}</Text>
      <Image
        style={styles.logo}
        source={{uri: `${API_URL}/${state.pockemon.picture}`}}
      />
      <Text>{state.pockemon.description}</Text>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Height:</Text>
        <Text style={styles.sectionDescription}>{state.pockemon.height}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Weight:</Text>
        <Text style={styles.sectionDescription}>{state.pockemon.weight}</Text>
      </View>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Type:</Text>
        <Text style={styles.sectionDescription}>{state.pockemon.type}</Text>
      </View>
      <Text style={styles.footer}>
        {state.isFavorited ? 'I like this pockemon!' : ''}
      </Text>
      <Button
        onPress={() => state.toggleFavorited()}
        title={state.isFavorited ? 'Remove from Favorites' : 'Add to Favorites'}
      />
    </ScrollView>
  );
});
