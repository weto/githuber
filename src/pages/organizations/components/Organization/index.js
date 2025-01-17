import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text } from 'react-native';

import styles from './styles';

export default class Organization extends Component {
  static propTypes = {
    organization: PropTypes.shape({
      avatar_url: PropTypes.string,
      login: PropTypes.string,
    }).isRequired,
  }

  static defaultProps = {};

  state = {};

  render() {
    const { organization } = this.props;

    return (
      <View style={styles.containerListOrganization}>
        <Image style={styles.avatar} source={{ uri: organization.avatar_url }} />
        <Text style={styles.tituloOrganization}>{organization.login}</Text>
      </View>
    );
  }
}
