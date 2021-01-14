import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import COLORS from './color';
import {useTrackPlayerProgress} from 'react-native-track-player';
import Slider from 'react-native-slider';

function PlayerSlider({onSeek}) {
    const { position, duration } = useTrackPlayerProgress()

    const formatTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        let seconds = Math.ceil(secs - minutes * 60);

        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`;
    };

    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                value={position}
                maximumValue={duration}
                onSlidingComplete={val => onSeek(val)}
                thumbTintColor={COLORS.primary}
                minimumTrackTintColor={COLORS.primary}
                maximumTrackTintColor={COLORS.sliderTrack}
            />
            <View style={styles.content}>
                <Text style={styles.left}>{formatTime(position)}</Text>
                <Text style={styles.right}>{formatTime(duration)}</Text>
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
