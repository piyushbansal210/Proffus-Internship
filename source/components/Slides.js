import React, { useRef, useState, useEffect } from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
} from 'react-native';

import { LogBox } from 'react-native'

LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
])
require('../assets/images/carousel.png')
const ENTRIES1 = [
    {
        illustration: require('../assets/images/carousel.png'),
    },
    {
        illustration: require('../assets/images/carousel.png')
    },
    {
        illustration: require('../assets/images/carousel.png')
    }
];

const { width,height } = Dimensions.get('screen');



export default function Slides() {

    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);

    const renderItem = ({ item, index }, parallaxProps) => {
        return (
            <View style={styles.item}>
                <ParallaxImage
                    source={item.illustration }
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    {...parallaxProps}
                />
            </View>
        );
    };


    return (
        <View style={styles.container}>
            <Carousel
                ref={carouselRef}
                sliderWidth={width}
                sliderHeight={height/5}
                itemWidth={width - 40}
                data={entries}
                renderItem={renderItem}
                hasParallaxImages={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        width: width - 40,
        height: height/5,
        
    },
    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});