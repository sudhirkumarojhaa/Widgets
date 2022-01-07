import React,{useState} from 'react'
import { View, SafeAreaView,Text, TouchableOpacity } from 'react-native'
import CircularMeter from '../components/CircularMeter'
import FullButton from '../components/FullButton'
import Progress from '../components/Progress'
import PyramidScales from '../components/PyramidScales'
import { styles } from '../design/styles'

export default function Dashboard() {
  const [status,setStatus]=useState(true);
  return (
    <SafeAreaView style={styles.container}>
      <Progress status={status ? 1: 2}/>
      <View style={styles.pv}>
        <View style={[styles.row,styles.btw]}>
          <Text style={[styles.caps,styles.pv]}>Rescue session anger & frustration</Text>
          <TouchableOpacity>
           <Text style={styles.lg}>&#10005;</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.lg,styles.pv]}>Pick the level your anger & frustration right now</Text>
      </View>
      {status ? <CircularMeter/> :  <PyramidScales/> }
      <FullButton title="Next" onPress={()=>setStatus(!status)}/>
    </SafeAreaView>
  )
}
