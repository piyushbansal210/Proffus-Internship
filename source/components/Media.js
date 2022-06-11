import { View, Text,StyleSheet ,FlatList,Image,Dimensions} from 'react-native'
import React from 'react'

import medias from '../assets/data/Medias'

const { width, height } = Dimensions.get('screen')

export default function Media() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Image
                source={{uri:medias[0].image}}
                style={{width:'50%',height:'50%',resizeMode:'contain'}}
            />
          </View>
          <View style={styles.box}>
            <Image
                source={{uri:medias[1].image}}
                style={{width:'50%',height:'50%',resizeMode:'contain'}}
            />
          </View>
          <View style={styles.box}>
            <Image
                source={{uri:medias[2].image}}
                style={{width:'50%',height:'50%',resizeMode:'contain'}}
            />
          </View>
      </View>
      <View style={styles.innerContainer}>
          <View style={styles.box}>
            <Image
                source={{uri:medias[3].image}}
                style={{width:'50%',height:'50%',resizeMode:'contain'}}
            />
          </View>
          <View style={styles.box}>
            <Image
                source={{uri:medias[4].image}}
                style={{width:'50%',height:'50%',resizeMode:'contain'}}
            />
          </View>
          <View style={styles.box}>
            <Image
                source={{uri:medias[5].image}}
                style={{width:'50%',height:'50%',resizeMode:'contain'}}
            />
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal:20,
        
    },
    box:{
        backgroundColor:'#E0ECDE',
        alignItems:'center',
        justifyContent: 'center',
        width:width/3.8,
        height:width/3.8,
        margin:10,
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