import {observer} from 'mobx-react';
import React from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {PockemonModel} from '../stores/PockemonStore';
import API_URL from '../config/config';

interface IProps {
  pockemon: PockemonModel;
  onPress?: (name: string) => void;
}

const baseStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#2A628F',
    borderWidth: 0.5,
    minHeight: 100,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const styles = StyleSheet.create({
  containerActive: {
    ...baseStyles.container,
    backgroundColor: '#2A628F',
    borderColor: '#FFFFFF',
  },
  containerDefault: {
    ...baseStyles.container,
    backgroundColor: '#CFE3F2',
  },
  headerActive: {
    ...baseStyles.header,
    color: '#FFFFFF',
  },
  headerDefault: {
    ...baseStyles.header,
    color: '#2A628F',
  },
  footer: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#FFFFFF',
  },
  content: {
    flexDirection: 'column',
    flexGrow: 1,
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    marginRight: 16,
    shadowColor: '#13293D',
    shadowOpacity: 0.55,
    shadowRadius: 14.78,
    borderWidth: 4,
  },
});

export const PockemonLightCrad = observer((props: IProps) => {
  const state = props.pockemon;
  const onPress = () => {
    if (props.onPress) {
      props.onPress(state.pockemon.name);
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={
          state.isFavorited ? styles.containerActive : styles.containerDefault
        }>
        <View style={styles.content}>
          <Text
            style={
              state.isFavorited ? styles.headerActive : styles.headerDefault
            }>
            {state.pockemon.name}
          </Text>
          <Image
            style={styles.image}
            source={{uri: `${API_URL}/${state.pockemon.picture}`}}
          />
          <Text style={styles.footer}>
            {state.isFavorited ? 'I like this!' : ''}
          </Text>
        </View>
        <Button
          onPress={() => state.toggleFavorited()}
          title={state.isFavorited ? 'Dislike' : 'Like'}
        />
      </View>
    </TouchableOpacity>
  );
});
