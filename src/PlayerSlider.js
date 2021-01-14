import React from 'react';
import Slider from '@react-native-community/slider';
import {Text, View, StyleSheet} from 'react-native';
import COLORS from './color';

function PlayerSlider() {
    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                value={0.3}
                maximumValue={1}
                thumbTintColor={COLORS.primary}
                minimumTrackTintColor={COLORS.primary}
                maximumTrackTintColor={COLORS.sliderTrack}
            />
            <View style={styles.content}>
                <Text style={styles.left}>0:00</Text>
                <Text style={styles.right}>0:00</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    slider: {
        width: '80%',
    },
    content: {
        width: '80%',
        position: 'relative',
        top: -8,
        paddingHorizontal: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    left: {
        color: COLORS.text,
        fontSize: 10
    },
    right: {
        color: '#FFF',
        fontSize: 10
    }
});

export default PlayerSlider;
