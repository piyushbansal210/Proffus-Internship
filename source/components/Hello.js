import { View, Text } from 'react-native'
import React from 'react'

export default function Hello() {
  return (
    <View style={{margin:20}}>
      <Text style={{fontFamily:'Bold',fontSize:25,color:'#2C6975'}}>Hello there,</Text>
      <Text style={{fontFamily:'Bold',fontSize:20,color:'#2C6975'}}>how can we serve you today...</Text>
    </View>
  )
}