import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';
import { colors } from 'styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default class Header extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  logout = () => {
    AsyncStorage.removeItem('@Githuber:username')
      .then(() => {
        const { dispatch } = this.props.navigation;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Welcome' }),
          ],
        });
        dispatch(resetAction);
      });
  };

  render() {
    return (
      <View style={styles.containerCabecalho}>
        <Text style={styles.titulo}>Githuber</Text>
        <TouchableOpacity onPress={this.logout}>
          <Icon name="exchange" size={14} color={colors.primary} />
        </TouchableOpacity>
      </View>
    );
  }
}
