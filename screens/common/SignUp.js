import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Picker } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { Container, Header, Content } from 'native-base';

import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../styles/defaultStyles.js'

import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import DefaultHeader from '../components/DefaultHeader.js';
import AdvtBanner from '../patient/AdvtBanner.js';

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

    const [mktPref, setMktPref] = React.useState(false);
    const [termsConditions, setTermsConditions] = React.useState(false);

    async function userRegistration() {
        try {
            navigation.navigate('SignIn')
            console.log(' Success');
        } catch (error) {
            console.log(' Error signing in...', error);
        }
    }

    return (
        <Container>
            <DefaultHeader />
            <Content>
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
                    <Picker
                        selectedValue={whoAreYou}
                        style={{height: 50, width: '80%', color: '#101010'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                        }>
                        <Picker.Item label="Patient" value="patient" />
                        <Picker.Item label="Doctor" value="doctor" />
                        <Picker.Item label="Chemist" value="chemist" />
                    </Picker>
                    <AppTextInput
                        value={aadharCard}
                        onChangeText={text => setAadharCard(text)}
                        leftIcon="identifier"
                        placeholder="Enter Aadhar Number"
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                        textContentType="numeric"
                    />
                    <AppTextInput
                        value={registrationNo}
                        onChangeText={text => setRegistrationNo(text)}
                        leftIcon="identifier"
                        placeholder="Enter Registration Number"
                        autoCapitalize="none"
                        keyboardType="phone-pad"
                        textContentType="numeric"
                    />
                    <View style={styles.checkboxInput}>
                        <Text style={styles.textLabel}>
                            <Checkbox  status={mktPref ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setMktPref(!mktPref);
                                }}
                            /> 
                        Marketing Preferences</Text>
                    </View>
                    <View style={styles.checkboxInput}>
                        <Text style={styles.textLabel}>
                            <Checkbox  status={termsConditions ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setTermsConditions(!termsConditions);
                                }}
                            /> 
                        Terms and Conditions</Text>
                    </View>
                    <AppButton title="Register" onPress={userRegistration} />
                    <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
                </View>
                </SafeAreaView>
            </Content>
            <AdvtBanner />
      </Container>
    );
};

