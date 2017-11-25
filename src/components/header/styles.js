import { StyleSheet } from 'react-native';
import { colors, fonts, matrics } from 'styles';

const styles = StyleSheet.create({
  containerCabecalho: {
    height: 54 + matrics.statusBarHeight,
    backgroundColor: colors.white + matrics.statusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  titulo: {
    color: colors.primary,
    fontSize: fonts.regular,
    fontWeight: 'bold',
  },
});

export default styles;
