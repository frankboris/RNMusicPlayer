import React from 'react';
import {StyleSheet, TouchableHighlight, View, ActivityIndicator} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import COLORS from './color';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';

function PlayerController({onPlay, onPause, onNext, onPrev}) {
    const playbackState = usePlaybackState();
    const iconSize = 24;

    const returnPlayBtn = (state) => {
        switch (state) {
            case TrackPlayer.STATE_PLAYING:
                return <Ionicon size={iconSize} color={COLORS.text} name="pause"/>;
            case TrackPlayer.STATE_PAUSED:
                return <Ionicon size={iconSize} color={COLORS.text} name="play"/>;
            default:
                return <ActivityIndicator size={iconSize} color={COLORS.text}/>;
        }
    };

    const handlePlayPause = (state) => {
        if (TrackPlayer.STATE_PLAYING === state) {
            onPause();
        } else if (TrackPlayer.STATE_PAUSED === state) {
            onPlay();
        }
    };

    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={() => onPrev()}>
                    <Ionicon size={iconSize} color={COLORS.text} name="ios-play-skip-back-sharp"/>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={() => handlePlayPause(playbackState)}>
                    {returnPlayBtn(playbackState)}
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={() => onNext()}>
                    <Ionicon size={iconSize} color={COLORS.text} name="ios-play-skip-forward-sharp"/>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
    },
});

export default PlayerController;
