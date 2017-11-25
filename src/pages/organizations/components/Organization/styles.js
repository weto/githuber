import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  containerListOrganization: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 3,
    shadowColor: colors.inactive,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    width: 160,
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginBottom: 20,
  },
  avatar: {
    width: 64,
    height: 64,
    resizeMode: 'contain',
  },
  tituloOrganization: {
    fontSize: fonts.small,
    fontWeight: 'bold',
    marginTop: 10,
    color: colors.primary,
  },
});

export default styles;
