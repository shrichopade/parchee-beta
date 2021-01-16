import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Tile } from 'react-native-elements';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import DefaultHeader from '../components/DefaultHeader';

export default function PatientHome({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <DefaultHeader title="Patient Home" />
            <View style={styles.container}>
                <Tile
                    imageSrc={require('../images/preferences.png')}
                    style={{ marginTop: 10 }}
                    tilesPerRow={2}
                    title="Manage Preferences"
                    >
                </Tile>
            </View>
        </SafeAreaView>
    );
}