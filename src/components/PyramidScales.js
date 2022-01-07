import React,{useState} from 'react'
import { View,StyleSheet,TouchableOpacity, Text } from 'react-native'
import { colorCode } from '../design/colorCode';
import { windowWidth } from '../design/constants';
import { styles } from '../design/styles';

export default function PyramidScales() {
  const[value,setValue]=useState(0);
  const status = value === 5 ? 'Very High': value === 4 ? 'High' : value === 3 ? 'Medium' : value === 2 ? 'Low': value === 1 ? 'Very Low' : null;
  return (
    <View style={styles.around}>
      <View style={styles.ctr}>
        <Text style={[styles.lg,styles.mv]}>{status}</Text>
        <View>
          <TouchableOpacity onPress={()=> setValue(5)} style={[styles.ctr,customStyles.tile,{backgroundColor: value === 5 ? colorCode.white : colorCode.pyramidBg,width: 300}]}/>
          <TouchableOpacity onPress={()=> setValue(4)} style={[styles.ctr,customStyles.tile,{backgroundColor: value >= 4 ? colorCode.white : colorCode.pyramidBg,width: 250}]}/>
          <TouchableOpacity onPress={()=> setValue(3)} style={[styles.ctr,customStyles.tile,{backgroundColor: value >= 3 ? colorCode.white : colorCode.pyramidBg,width: 200}]}/>
          <TouchableOpacity onPress={()=> setValue(2)} style={[styles.ctr,customStyles.tile,{backgroundColor: value >= 2 ? colorCode.white : colorCode.pyramidBg,width: 150}]}/>
          <TouchableOpacity onPress={()=> setValue(1)} style={[styles.ctr,customStyles.tile,{backgroundColor: value >= 1 ? colorCode.white : colorCode.pyramidBg,width: 80,borderTopLeftRadius: 40,borderTopRightRadius: 40,borderBottomLeftRadius: 70,borderBottomRightRadius: 80,}]}/>
        </View>
      </View>
    </View>
  )
}

const customStyles = StyleSheet.create({
  tile:{
    height: 50,
    backgroundColor: colorCode.white,
    borderRadius: windowWidth,
    marginVertical: 5,
  }
})