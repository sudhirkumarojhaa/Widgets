import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './src/design/styles'
import Dashboard from './src/screens/Dashboard'

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard/>
    </View>
  )
}
