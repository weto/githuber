import React, { Component } from 'react';
import { Text, ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from 'service/api';
import Organization from './components/Organization';
import styles from './styles';

export default class Organizations extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="building" size={20} color={tintColor} />
    ),
  };

  state = {
    organizations: [],
    loading: false,
  };

  componentWillMount() {
    this.setState({ loading: true });
    this.loadOrganizations().then(() => {
      this.setState({ loading: false });
    });
  }

  loadOrganizations = async () => {
    const username = await AsyncStorage.getItem('@Githuber:username');
    const response = await api.get(`/users/${username}/orgs`);

    this.setState({ organizations: response.data });

    console.tron.log(this.state.organizations);
  };

  renderOrganizations = () => (
    this.state.organizations.map(organization => (
      <Organization key={organization.id} organization={organization} />
    ))
  );

  renderListOrganization = () => (
    this.state.organizations.length
      ? this.renderOrganizations()
      : <Text style={styles.empty}>Não existe Organização no Repositório</Text>
  );

  render() {
    return (
      <ScrollView
        style={styles.containerOrganization}
        contentContainerStyle={styles.contentContainer}
      >
        {
         this.state.loading
          ? <ActivityIndicator size="small" color="#999" style={styles.loading} />
          : this.renderListOrganization()
        }
      </ScrollView>
    );
  }
}
