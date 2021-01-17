import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function SignIn({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function signIn() {
        try {
            navigation.navigate('PatientHome')
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
          <View style={styles.container}>
            <Text style={styles.pageTitle}>Welcome to Parchee</Text>
            <Text style={styles.pageTitle2}>Your Medical Assistant</Text>
            <AppTextInput
              value={username}
              onChangeText={text => setUsername(text)}
              leftIcon="email-open"
              placeholder="Enter username"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <AppTextInput
              value={password}
              onChangeText={text => setPassword(text)}
              leftIcon="lock"
              placeholder="Enter password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
            <AppButton title="Login" onPress={signIn} />
            <View style={styles.footerButtonContainer}>
              <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
                <Text style={styles.forgotPasswordButtonText}>
                  Forgot Password? Reset Password
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.footerButtonContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={styles.forgotPasswordButtonText}>
                    Don't have an account? Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
          </View>
        </SafeAreaView>
    );
};