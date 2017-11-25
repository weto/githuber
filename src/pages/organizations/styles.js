import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  containerOrganization: {
    flex: 1,
    backgroundColor: colors.background,
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default styles;
