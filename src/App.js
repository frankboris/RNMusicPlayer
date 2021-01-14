import React, {useEffect, useState} from 'react';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Ionicon from 'react-native-vector-icons/Ionicons';
import songs from './data';
import FlatListItem from './FlatListItem';
import PlayerController from './PlayerController';
import COLORS from './color';
import PlayerSlider from './PlayerSlider';

function App() {
    const [playlist, setPlaylist] = useState(songs);

    useEffect(() => {
        setupPlayer();
    }, []);

    const shufflePlaylist = () => {
        setPlaylist(songs.sort(() => Math.random() - 0.5));
    };

    const setupPlayer = () => {
        TrackPlayer.setupPlayer().then(async () => {
            await TrackPlayer.add(playlist);
            //TrackPlayer.play();
            await TrackPlayer.updateOptions({
                stopWithApp: false,
                alwaysPauseOnInterruption: true,
                capabilities: [
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE,
                    TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
                    TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
                    TrackPlayer.CAPABILITY_STOP,
                ],
            });
        });
    };

    const onSongItemPress = (song) => {

    };

    const onSeek = async (val) => {
        await TrackPlayer.seekTo(val);
    };

    const onPlay = async () => {
        await TrackPlayer.play();
    };

    const onPause = async () => {
        await TrackPlayer.pause();
    };

    const onNext = async () => {
        await TrackPlayer.skipToNext();
    };

    const onPrevious = async () => {
        await TrackPlayer.skipToPrevious();
    };

    return (
        <>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" style={styles.statusBar}
                       barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                <View>
                    <View>
                        <ImageBackground style={styles.backgroundImage} source={require('../assets/images/faded.jpg')}>
                            <View style={styles.header}>
                                <View style={styles.appBar}>
                                    <Text style={styles.title}>Music Player</Text>
                                </View>
                                <View style={styles.headerContent}>
                                    <View style={styles.songContent}>
                                        <Text style={styles.songTitle}>Love To Dance</Text>
                                        <Text style={styles.songArtist}>PinkinLark LLC</Text>
                                    </View>
                                    <PlayerSlider onSeek={onSeek}/>
                                    <PlayerController onNext={onNext} onPrev={onPrevious} onPause={onPause}
                                                      onPlay={onPlay}/>
                                </View>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{flexGrow: 1}}>
                        <FlatList
                            data={playlist}
                            contentContainerStyle={{flexGrow: 1}}
                            renderItem={({item, index}) =>
                                <FlatListItem
                                    song={item}
                                    divider={index !== songs.length - 1}
                                    active="1"
                                    onPress={onSongItemPress}
                                />
                            }
                            keyExtractor={(item) => item.id.toString()}
                        />
                        <TouchableHighlight onPress={shufflePlaylist} style={styles.shuffleBtn}>
                            <Ionicon size={24} color="#FFF" name="shuffle"/>
                        </TouchableHighlight>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
    },
    appBar: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        paddingTop: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    headerContent: {
        paddingVertical: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    songContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    songArtist: {
        fontSize: 14,
        color: COLORS.text,
    },
    shuffleBtn: {
        position: 'absolute',
        elevation: 3,
        top: -25,
        right: 20,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        zIndex: 99,
    },
    backgroundImage: {
        position: 'relative',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default App;
