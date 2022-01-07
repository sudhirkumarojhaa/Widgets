import React from 'react'
import {View, StyleSheet, Text } from 'react-native'
import { colorCode } from '../design/colorCode';
import { windowWidth } from '../design/constants';
import { styles } from '../design/styles';

export default function Progress({status}) {
  return (
      <View style={styles.row}>
        <View style={[customStyles.steps,{backgroundColor: status === 1 ? colorCode.white: colorCode.lightBlue}]}/>
        <View style={[customStyles.steps,{backgroundColor: status === 2 ? colorCode.white: colorCode.lightBlue}]}/>
        <View style={[customStyles.steps,{backgroundColor: status === 3 ? colorCode.white: colorCode.lightBlue}]}/>
        <View style={[customStyles.steps,{backgroundColor: status === 4 ? colorCode.white: colorCode.lightBlue}]}/>
        <View style={[customStyles.steps,{backgroundColor: status === 5 ? colorCode.white: colorCode.lightBlue}]}/>
      </View>
  )
}

const customStyles = StyleSheet.create({
  steps:{
    backgroundColor: colorCode.white,
    width: '18%',
    marginRight: 10,
    height: 5,
    borderRadius: 10,
    marginTop: 20,
  }
})