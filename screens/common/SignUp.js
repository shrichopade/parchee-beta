import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

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

    const [whoAreYou, setWhoAreYou] = useState('Patient');
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
                onChangeText={text => setGivenname(text)}
                leftIcon="face"
                placeholder="Enter Given Names"
                autoCapitalize="words"
                keyboardType="default"
                textContentType="givenName"
            />
            <AppTextInput
                value={familyName}
                onChangeText={text => setFamilyname(text)}
                leftIcon="face"
                placeholder="Enter Family Names"
                autoCapitalize="words"
                keyboardType="default"
                textContentType="familyName"
            />
            <AppTextInput
                value={dateOfBirth}
                onChangeText={text => setDateOfBirth(text)}
                leftIcon="text"
                placeholder="Enter Date of Birth"
                autoCapitalize="none"
                keyboardType="numeric"
                textContentType="numeric"
            />
            <AppTextInput
                value={mobileNumber}
                onChangeText={text => setMobileNumber(text)}
                leftIcon="text"
                placeholder="Enter Mobile Number"
                autoCapitalize="none"
                keyboardType="phone-pad"
                textContentType="numeric"
            />
            <AppTextInput
              value={username}
              onChangeText={text => setUsername(text)}
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
            <RNPickerSelect name="whoAreYou" style={styles.RNPickerSelectStyle}
                items={[
                    { label: 'Patient', value: 'Patient' },
                    { label: 'Doctor', value: 'Doctor' },
                    { label: 'Chemist', value: 'Chemist' },
                ]}
            />
            <AppTextInput
                value={aadharCard}
                onChangeText={text => setAadharCard(text)}
                leftIcon="text"
                placeholder="Enter Aadhar Number"
                autoCapitalize="none"
                keyboardType="phone-pad"
                textContentType="numeric"
            />
            <AppTextInput
                value={registrationNo}
                onChangeText={text => setRegistrationNo(text)}
                leftIcon="text"
                placeholder="Enter Registration Number"
                autoCapitalize="none"
                keyboardType="phone-pad"
                textContentType="numeric"
            />
            <AppButton title="Register" onPress={userRegistration} />
            <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
          </View>
        </SafeAreaView>
    );
};

