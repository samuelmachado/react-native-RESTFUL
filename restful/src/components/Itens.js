import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';
export default class Itens extends Component {
  render() {
    return (
      <View style={styles.item}>
        <View style={styles.foto}>
          <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto }} />
        </View>
        <View style={styles.detalhesItem}>
          <Text style={styles.txtTitulo}>{this.props.item.titulo}</Text>
          <Text>{this.props.item.valor}</Text>
          <Text>{this.props.item.local_anuncio}</Text>
          <Text>{this.props.item.local_publicacao}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  detalhesItem: {
    marginLeft: 20,
  
  }
});
