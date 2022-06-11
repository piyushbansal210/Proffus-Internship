import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.text}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20,
        marginBottom:20,
        marginTop:25
    },
    text: {
        fontFamily: 'Bold',
        fontSize: 20,
    }
})