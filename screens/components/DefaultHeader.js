import React from 'react';
import { Header } from 'react-native-elements';
import { ProfileComponent } from '../components/ProfileComponent.js'

export default function DefaultHeader({ title }) {
    return (
        <Header
            backgroundColor="green"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: { title }, style: { color: '#ffffff',fontSize: 18,fontWeight: '600' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    );
}