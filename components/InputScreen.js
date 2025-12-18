import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Text,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const InputScreen = ({ navigation }) => {
  const [value, setValue] = useState('');
  const [cities, setCities] = useState([]);

  let onAdd = () => {
    setCities([...cities, value]);
    setValue('');
  };

  let navigateToCity = city => {
    navigation.navigate('WeatherDetails', {
      city,
    });
  };

  let onDelete = city => {
    setCities(cities.filter(value => value !== city));
  };

  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <View style={style.cityContainer}>
          <FlatList
            data={cities}
            style={style.container}
            contentContainerStyle={{ flexGrow: 1 }}
            renderItem={({ item, index }) => {
              return (
                <View style={style.cityContainer}>
                  <Text style={style.details} key={item + index} color={'red'}>
                    {item}
                  </Text>
                  <Pressable
                    style={style.button}
                    onPress={() => {
                      navigateToCity(item);
                    }}
                  >
                    <Text style={style.buttonText}>{'Go To'}</Text>
                  </Pressable>
                  <Pressable
                    style={style.button}
                    onPress={() => {
                      onDelete(item);
                    }}
                  >
                    <Text style={style.buttonText}>{'Delete'}</Text>
                  </Pressable>
                </View>
              );
            }}
          />
        </View>
        <View style={style.actionContainer}>
          <TextInput
            value={value}
            placeholder="Enter a city here!"
            style={style.textInput}
            textAlign="center"
            onChangeText={text => {
              setValue(text);
            }}
          />
          <Pressable
            style={style.button}
            onPress={() => {
              onAdd();
            }}
          >
            <Text style={style.buttonText}>{'Add city'}</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityContainer: {
    flex: 1,

    flexDirection: 'row',
    width: '100%',
    margin: 2,
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
  },

  textInput: {
    backgroundColor: '#fff',
    padding: 5,
    borderWidth: 1,
    borderRadius: 3,
    width: '80%',
    borderColor: 'gray',
  },
  button: {
    backgroundColor: '#00009d',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: { color: '#fff' },
  details: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    padding: 5,

    flex: 1,
  },
});

export default InputScreen;
