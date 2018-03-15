import React, { Component } from 'react';
import {
  AppRegistry,
  //StyleSheet,
  Button,
  Text, TextInput,
  View
 } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      panjang: 0,
      lebar: 0,
      tinggi: 0,
      volume: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#BA68C8' }}>

        <View style={{ backgroundColor: '#4A148C' }}>
          <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }}>
          Menghitung Volume Balok
          </Text>
        </View>

        <View style={{ margin: 20, padding: 10, backgroundColor: '#E1BEE7' }}>

          <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Panjang"
            onChangeText={(panjang) => this.setState({ panjang })}
            keyboardType='numeric'
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Lebar"
            onChangeText={(lebar) => this.setState({ lebar })}
            keyboardType='numeric'
          />

          <TextInput
            style={{ height: 40 }}
            placeholder="Masukkan Tinggi"
            onChangeText={(tinggi) => this.setState({ tinggi })}
            keyboardType='numeric'
          />

          <Button
            onPress={() => this.setState({
              volume: (this.state.panjang * this.state.lebar * this.state.tinggi)
            })}
            title="Hitung"
            color='#AA00FF'
            accessibilityLabel="Klik untung menghitung"
          />
      </View>

      <View style={{ margin: 20, backgroundColor: '#8E24AA' }}>
              <Text style={{ padding: 10, fontSize: 20, color: 'white' }}>
                Panjang={this.state.panjang} {'\n'}
                Lebar={this.state.lebar} {'\n'}
                Tinggi={this.state.tinggi} {'\n'}
                Volume={this.state.volume}
              </Text>
      </View>

      </View>
    );
  }
}
AppRegistry.registerComponent('Latihan4', () => App);
