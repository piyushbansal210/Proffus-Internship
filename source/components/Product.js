import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

import BACKGROUND from '../assets/images/productBack.jpg'

import { Ionicons } from '@expo/vector-icons';

export default function Product(props) {


  const { description, featured, image, medicineCount, most_popular, name, price } = props.item;

  return (
    <ImageBackground style={styles.container} source={BACKGROUND} imageStyle={{ opacity: 0.2, borderRadius: 20, }}>
      <View style={styles.leftContainer}>
        <Image
          source={image}
          style={styles.image}
        />
        <Text style={styles.count}>{medicineCount}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.rightTopContainer}>
          <Text style={styles.name}>{name}</Text>
          <Text numberOfLines={4} style={styles.description}>{description}</Text>
          <Text style={styles.price}>Rs {price.toFixed(2)}</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#2C6975', marginVertical: 5 }} />
        <View style={styles.rightBottomContainer}>
          <Text style={styles.cartAdd}>ADD TO CART</Text>
          <Ionicons name="share-social" size={22} color="#2C6975" />
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flexDirection: 'row',
    marginBottom: 25,
    elevation: 10, 
    borderRadius: 20,
    marginHorizontal:20
  },
  rightContainer: {
    flex: 1,
  },
  name: {
    fontFamily: 'Bold',
    fontSize: 20
  },
  description: {
    fontFamily: 'Medium',
    fontSize: 14,
    marginTop: 5
  },
  price: {
    color: '#2C6975',
    fontFamily: 'Bold',
    fontSize: 18,
    marginTop:5
  },
  rightBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:0
  },
  cartAdd: {
    flex: 1,
    fontFamily: 'Black',
    color: '#2C6975',
    fontSize: 15,
  },
  rightTopContainer: {
    borderBottomColor: '#2C6975',
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    flex: 1
  },
  leftContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count: {
    fontFamily: 'Bold',
    fontSize: 16,
    marginVertical: 10
  }
})