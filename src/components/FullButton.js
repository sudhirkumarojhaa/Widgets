import React from 'react'
import { StyleSheet,TouchableOpacity, Text } from 'react-native'
import { colorCode } from '../design/colorCode';
import { windowWidth } from '../design/constants';
import { styles } from '../design/styles';

export default function FullButton({title,onPress}) {
  return (
      <TouchableOpacity style={[customStyles.btn,styles.ctr]} onPress={onPress}>
        <Text style={customStyles.btnText}>{title}</Text>
      </TouchableOpacity>
  )
}

const customStyles = StyleSheet.create({
  btn:{
    width: windowWidth - 50,
    height: 50,
    backgroundColor: colorCode.white,
    borderRadius:windowWidth/2,
    margin: 5,
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
  }
})