import * as React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import ActionButton from 'react-native-circular-action-menu';
import { Ionicons } from '@expo/vector-icons';

export default function Circular() {
    return (
        <View style={styles.tabBarInfoContainer}>
            <ActionButton buttonColor="rgba(231,76,60,1)" icon={<Ionicons name="ios-eye" style={styles.actionButtonIcon} ></Ionicons>}>
                <ActionButton.Item buttonColor='#9b59b6' title="LEAGUES" onPress={() => console.log("notes tapped!")}>
                    <Ionicons name="md-gift" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#3498db' title="TOURNAMENTS" onPress={() => {}}>
                    <Ionicons name="md-male" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#1abc9c' title="LEADERBOARD" onPress={() => {}}>
                    <Ionicons name="ios-medal" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#eb1561' title="RECRUITMENT" onPress={() => {}}>
                    <Ionicons name="ios-business" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='#ff5606' title="FAQ/HELP" onPress={() => {}}>
                    <Ionicons name="ios-help" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </View>
    )
}

const styles = StyleSheet.create({
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
          ios: {
            shadowColor: 'black',
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
          },
          android: {
            elevation: 20,
          },
        }),
        alignItems: 'center',
        // backgroundColor: '#fbfbfb',
        paddingVertical: 20,
      },
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    }
})