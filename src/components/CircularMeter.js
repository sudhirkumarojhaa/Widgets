import React,{useState} from 'react'
import { View,StyleSheet, Text,Image} from 'react-native'
import {Slider} from '@miblanchard/react-native-slider';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { colorCode } from '../design/colorCode';
import { windowHeight, windowWidth } from '../design/constants';
import { styles } from '../design/styles';

export default function CircularMeter() {
  const[value,setValue]=useState(0);
  return (
    <View style={styles.around}>
      <View style={[customStyles.outerBorder,styles.ctr]}>
        <View style={customStyles.innerBorder}>
        <AnimatedCircularProgress
          style={{marginTop: 10}}
          size={220}
          width={5}
          rotation={0}
          fill={value*10}
          tintColor={colorCode.progressTint}
          backgroundColor="transparent" />
          <View style={[customStyles.box,styles.ctr]}>
            <Text style={customStyles.title}>{value}</Text>
            <Image source={require('../assets/cloud.jpeg')} style={customStyles.img}/>
          </View>
        </View>
      </View>
      <Slider
        containerStyle={customStyles.slider}
        value={value}
        minimumValue={0}
        maximumValue={10}
        step={1}
        thumbTintColor={colorCode.blue}
        trackStyle={customStyles.trackStyle}
        onValueChange={value => setValue(value)}
        minimumTrackTintColor={colorCode.blue}
    />
    </View>
  )
}

const customStyles = StyleSheet.create({
  outerBorder:{
    width: windowWidth/1.5,
    height: windowWidth/1.5,
    borderRadius: windowWidth,
    borderWidth: 3,
    borderColor: colorCode.lightBlue,
    borderStyle:'dashed',
    position: 'relative'
  },
  innerBorder:{
    position: 'absolute',
    top: 15,
  },
  box:{
    position: 'absolute',
    top: 15,
  },
  img:{
    width: windowWidth/2,
    height: windowWidth/2,
    resizeMode: 'cover',
    borderRadius: windowWidth/2,
    borderWidth: 30,
    borderColor: colorCode.grey
  },
  title:{
    fontSize: 42,
    color: colorCode.white,
    position: 'absolute',
    zIndex: 100,
    alignSelf: 'center'
  },
  slider:{
    width: windowWidth - 50
  },
  trackStyle:{
    height: windowWidth/30,
    borderRadius: 10,
    backgroundColor: colorCode.white
  }
})