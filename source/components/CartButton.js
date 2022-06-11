import { View, Text, Dimensions } from 'react-native'
import React from 'react'

import { SimpleLineIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen')

export default function CartButton() {
    return (
        <View style={{backgroundColor:'#2C6975',padding:20,alignItems:'center',justifyContent:'center',position:'absolute',bottom:10,borderRadius:50,right:20}}>
            <SimpleLineIcons name="handbag" size={24} color="white" />
        </View>
    )
}