import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SectionList } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';

export default function SignUp({ navigation }) {
    const [givenName, setGivenname] = useState('');
    const [familyName, setFamilyname] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');

    const [mobileNumber, setMobileNumber] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [whoAreYou, setWhoAreYou] = useState('');
    const [aadharCard, setAadharCard] = useState('');
    const [registrationNo, setRegistrationNo] = useState('');


    async function userRegistration() {
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
                value={givenName}
                leftIcon="text"
                placeholder="Enter Given Names"
                autoCapitalize="words"
                keyboardType="default"
                textContentType="givenName"
            />
            <AppTextInput
                value={familyName}
                leftIcon="text"
                placeholder="Enter Family Names"
                autoCapitalize="words"
                keyboardType="default"
                textContentType="familyName"
            />
            <AppTextInput
                value={dateOfBirth}
                leftIcon="text"
                placeholder="Enter Date of Birth"
                autoCapitalize="none"
                keyboardType="calendar"
                textContentType="numeric"
            />
            <AppTextInput
                value={mobileNumber}
                leftIcon="text"
                placeholder="Enter Mobile Number"
                autoCapitalize="none"
                keyboardType="calendar"
                textContentType="numeric"
            />
            <AppTextInput
              value={username}
              leftIcon="email"
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
            <AppButton title="Register" onPress={userRegistration} />
            <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
          </View>
        </SafeAreaView>
    );
};

