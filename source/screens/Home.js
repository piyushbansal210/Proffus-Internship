import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Product from '../components/Product'

import products from '../assets/data/products'
import categories from '../assets/data/categories'

import Title from '../components/Title';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories'
import Slides from '../components/Slides'
import Hello from '../components/Hello'
import Options from '../components/Options'
import Media from '../components/Media'


export default function Home() {

  const [items, setItems] = useState(products);
  const [featured, setFeatured] = useState([]);
  const [popular, setPopular] = useState([]);


  useEffect(() => {
    const feature = items.filter(item => item.featured === 1);
    const popularity = items.filter(item => item.most_popular === 1);

    setFeatured(feature);
    setPopular(popularity);
  }, [products])
  return (
    <View style={styles.outerContainer}>
      <ScrollView style={styles.container} horizontal={false}>
        <Hello />

        <Slides />

          <Options />


        <View style={styles.cat}>
          <Text style={{ fontFamily: 'Bold', fontSize: 20, flex: 1 }}>Categories</Text>
          <Text style={{ fontFamily: 'Bold', color: '#2C6975', fontSize: 20 }}>View All</Text>
        </View>

        <View >
          {
            categories.map(category => {
              return (
                <Categories item={category} key={category.id} />
              )
            })
          }
        </View>

        <Title text={'Featured Product'} />
        {
          popular.map(product => {
            return (
              <Product item={product} key={product.id} />
            )
          })
        }

        <Title text={'Most Purchased Products'} />
        {
          featured.map(product => {
            return (
              <Product item={product} key={product.id} />
            )
          })
        }
      <Title text={'Our Media Associates'} />

        <Media/>
        <Text style={{marginBottom:10,marginHorizontal:20,marginTop:40,alignSelf:'center',fontFamily:'Bold'}}>© ND Care Nirogam Pvt. Ltd. - All rights Reserved</Text>
      </ScrollView>
      <View>
        <CartButton />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  outerContainer: {
    flex: 1,
  },
  cat: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20
  }
})