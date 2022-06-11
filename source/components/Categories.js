import { View, Text, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native'
import React from 'react'

import BACKGROUND from '../assets/images/category.png'
import BACKGROUND2 from '../assets/images/category2.png'
import { FontAwesome } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')

export default function Categories(props) {

    return (
        <ImageBackground style={[styles.container,{borderTopLeftRadius: props.item.id % 2 !== 0 ? width / 5 : 0, borderBottomLeftRadius: props.item.id % 2 !== 0 ? width / 5 : 0, borderBottomRightRadius: props.item.id % 2 === 0 ? width / 5 : 0, borderTopRightRadius: props.item.id % 2 === 0 ? width / 5 : 0,}]} source={props.item.id % 2 !== 0 ? BACKGROUND : BACKGROUND2} imageStyle={{ borderTopLeftRadius: props.item.id % 2 !== 0 ? width / 5 : 0, borderBottomLeftRadius: props.item.id % 2 !== 0 ? width / 5 : 0, borderBottomRightRadius: props.item.id % 2 === 0 ? width / 5 : 0, borderTopRightRadius: props.item.id % 2 === 0 ? width / 5 : 0, opacity: 0.2, backgroundColor: 'white' }}>
            {props.item.id % 2 !== 0 ? <View>
                <Image
                    source={{ uri: props.item.image }}
                    style={styles.image}
                />
            </View> : null}
            <View style={{ flex: 1, margin: 10 }}>
                <Text style={{ fontFamily: 'Bold', marginBottom: 7 }}>{props.item.name}</Text>
                <Text style={{ fontFamily: 'Medium', fontSize: 14, marginBottom: 7 }} numberOfLines={4}>{props.item.description}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontFamily: 'Bold', color: '#2C6975', marginRight: 10 }}>EXPLORE</Text>
                    <FontAwesome name="angle-right" size={24} color="#2C6975" />
                </View>

            </View>
            {props.item.id % 2 === 0 ? <View>
                <Image
                    source={{ uri: props.item.image }}
                    style={styles.image}
                />
            </View> : null}
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
        marginBottom: 25,
        elevation: 10,
        marginHorizontal: 20
    },
    image: {
        width: width / 3.5,
        height: width / 3.5,
        margin: 10,
        borderRadius: width / 7
    },
    backgroundImage: {}
})