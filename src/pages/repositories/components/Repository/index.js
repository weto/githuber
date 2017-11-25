import React, { Component } from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Repository extends Component {
  static propTypes = {
    repository: PropTypes.shape({
      full_name: PropTypes.string,
      stargate_count: PropTypes.number,
      forks_count: PropTypes.number,
      watchers_count: PropTypes.number,
    }).isRequired,
  }

  static defaultProps = {};

  state = {};

  render() {
    const { repository } = this.props;

    return (
      <View style={styles.containerListProject}>
        <Text style={styles.titulo}>{repository.full_name}</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="star" size={14} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.stargate_count}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="code-fork" size={14} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.forks_count}</Text>
          </View>
          <View style={styles.info}>
            <Icon name="eye" size={14} style={styles.infoIcon} />
            <Text style={styles.infoText}>{repository.watchers_count}</Text>
          </View>
        </View>
      </View>
    );
  }
}
