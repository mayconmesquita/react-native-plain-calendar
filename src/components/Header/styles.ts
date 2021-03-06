import { StyleSheet } from 'react-native';

export const s = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainers: {
    flex: 1,
  },
  headerTitleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
  },
  headerNextButton: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  headerPrevButton: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});
