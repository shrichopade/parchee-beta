import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container, Button, Content, Form, Item, Input, Label, Icon } from 'native-base';
import { styles } from '../styles/defaultStyles.js'
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
    <Container style={styles.container}>
      <Content>
        <Form>
          <Text style={styles.pageTitle}>Welcome to Parchee</Text>
          <Text style={styles.pageTitle2}>Your Medical Assistant</Text>
          <Item floatingLabel>
            <Label>Username</Label>
            <Icon active name='person' />
            <Input 
              value={username}
              onChangeText={text => setUsername(text)}
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"  
            />
          </Item>
          <Item floatingLabel last>
            <Label>Password</Label>
            <Icon active name='lock' />
            <Input 
              value={password}
              onChangeText={text => setPassword(text)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"  
            />
          </Item>
          <AppButton title="Login" onPress={signIn} />
          <Text style={styles.footerText}>Copyright Parchee, all rights reserved</Text>
        </Form>
      </Content>
    </Container>
  );
}