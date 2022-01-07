import { StyleSheet } from 'react-native'
import { colorCode } from './colorCode'
import { windowHeight, windowWidth } from './constants'

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: colorCode.brand,
    padding: 20
  },
  // flex CSS
  row:{
    flexDirection: 'row',
    alignItems: 'center'
  },
  ctr:{
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  around:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  btw:{
    justifyContent: 'space-between',
  },
  // text styles
  lg:{
    fontSize: windowWidth/18,
    color: colorCode.text,
    fontWeight: 'bold'
  },
  caps:{
    fontSize: windowWidth/32,
    color: colorCode.text,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  pv:{
    paddingVertical: 10
  },
  mv: {
    marginVertical: 30
  }
})