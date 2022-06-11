import { View, Text,StyleSheet ,FlatList,Image,Dimensions} from 'react-native'
import React from 'react'

import info from '../assets/data/Options'

const { width, height } = Dimensions.get('screen')

export default function Options() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Image
                source={info[0].image}
                style={{width:'40%',height:'40%'}}
            />
            <Text style={styles.text}>{info[0].name}</Text>
          </View>
          <View style={styles.box}>
            <Image
                source={info[1].image}
                style={{width:'40%',height:'40%'}}
            />
            <Text style={styles.text}>{info[1].name}</Text>
          </View>
          <View style={styles.box}>
            <Image
                source={info[2].image}
                style={{width:'40%',height:'40%'}}
            />
            <Text style={styles.text}>{info[2].name}</Text>
          </View>
      </View>
      <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Image
                source={info[3].image}
                style={{width:'40%',height:'40%'}}
            />
            <Text style={styles.text}>{info[3].name}</Text>
          </View>
          <View style={styles.box}>
            <Image
                source={info[4].image}
                style={{width:'40%',height:'40%'}}
            />
            <Text style={styles.text}>{info[4].name}</Text>
          </View>
          <View style={styles.box}>
            <Image
                source={info[5].image}
                style={{width:'40%',height:'40%'}}
            />
            <Text style={styles.text}>{info[5].name}</Text>
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        margin:20,
        
    },
    box:{
        backgroundColor:'#2C6975',
        alignItems:'center',
        justifyContent: 'center',
        width:width/3.5,
        height:width/3.5,
        margin:5,
        borderRadius:20,
        elevation:8
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    },
    text:{
        color:'white',
        fontFamily:'Bold',
        marginTop:7
    }

})