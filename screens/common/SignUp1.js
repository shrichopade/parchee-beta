
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
                    type="date"
                    value={dateOfBirth}
                    onChangeText={text => setDateOfBirth(text)}
                    leftIcon="text"
                    placeholder="Enter Date of Birth"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
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
                    <Text style={styles.forgotPasswordButtonText}>
                        <Checkbox  status={mktPref ? 'checked' : 'unchecked'}
                            onPress={() => {
                                setMktPref(!mktPref);
                            }}
                        /> 
                    Marketing Preferences</Text>
                </View>
                <View style={styles.checkboxInput}>
                    <Text style={styles.forgotPasswordButtonText}>
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
  </Container>