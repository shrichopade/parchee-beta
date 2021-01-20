import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function ConfirmSignUp({ navigation }) {
    const [passCode, setPassCode] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasswd, setConfirmPasswd] = useState('');

    async function confirmSignUp() {
        try {
            navigation.navigate('SignIn')
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <AppTextInput
              value={passCode}
              onChangeText={text => setPassCode(text)}
              leftIcon="text"
              placeholder="Enter Passcode"
              autoCapitalize="none"
              keyboardType="phone-pad"
              textContentType="numeric"
            />
            <AppTextInput
              value={password}
              onChangeText={text => setPassword(text)}
              leftIcon="lock"
              placeholder="Enter new password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
            <AppTextInput
              value={confirmPasswd}
              onChangeText={text => setConfirmPasswd(text)}
              leftIcon="lock"
              placeholder="Confirm new password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
            <AppButton title="Confirm" onPress={confirmSignUp} />
            <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
          </View>
        </SafeAreaView>
    );
};