import React, { Component } from 'react';
import {
  ScrollView,
  Text,
  View
} from 'react-native';
import Itens from './Itens'
import axios from 'axios';

export default class ListaItens extends Component {
  constructor(props) {
    super(props);
    this.state = { listaItens: [] };
  }
  componentWillMount() {
    axios.get('https://api.myjson.com/bins/t6na3')
    .then((response) => {
        this.setState({ listaItens: response.data });
    })
    .catch((err) => {
      console.log('Deu pau ');
      console.log(err);
    });
  }

  render() {
    return (
        <ScrollView>
        { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />)) }
      </ScrollView>
    );
  }
}
