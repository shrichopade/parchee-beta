import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

var { height } = Dimensions.get('window');
var box_count = 3;
var box_height = height / box_count;

export default function PatientHome({ navigation }) {
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                
            </View>
        </SafeAreaView>
    );
}