import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function ResetPasswd({ navigation }) {
    const [username, setUsername] = useState('');

    async function sendCode() {
        try {
            navigation.navigate('ConfirmSignUp')
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <AppTextInput
              value={username}
              onChangeText={text => setUsername(text)}
              leftIcon="email-open"
              placeholder="Enter username"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppButton title="Send Code" onPress={sendCode} />
            <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
          </View>
        </SafeAreaView>
    );
};