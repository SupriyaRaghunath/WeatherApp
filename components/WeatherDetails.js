import React, { useEffect, useState } from 'react';
import { Pressable, View, Text, StyleSheet, FlatList } from 'react-native';

import { FETCH_WEATHER, FETCH_WEATHER_PARAMS } from './../utils/constants';


const WeatherDetails = ({ navigation, route }) => {
  const [data, setData] = useState({});

  let fetchWeather = async () => {
    const resp = await fetch(
      FETCH_WEATHER + route.params.city + FETCH_WEATHER_PARAMS,
    );
    const json = await resp.json();

    setData(json);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <View style={styles.container}>
      {Object.keys(data)?.length ? (
        <View>
          <Text style={styles.details}>City: {data?.name || ''}</Text>
          <Text style={styles.details}>
            Temperature: {data?.main?.temp || ''}
          </Text>
          <Text style={styles.details}>
            Feels like: {data?.main?.feels_like || ''}
          </Text>
          <Text style={styles.details}>
            Weather: {data?.weather?.[0]?.description || ''}
          </Text>
        </View>
      ) : (
        <View />
      )}

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Text style={styles.buttonText}>{'Back'}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 10,
    padding: 5,
  },
  button: {
    backgroundColor: '#00009d',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  buttonText: { color: '#fff' },
});

export default WeatherDetails;
