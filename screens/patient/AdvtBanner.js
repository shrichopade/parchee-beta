import * as React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Body, Text } from 'native-base';
import { styles } from '../styles/defaultStyles.js'

const AdvtBanner = () => (
    <Card> 
        <CardItem style={styles.advtBannerBgColor}>
            <Body>                
                <Text style={styles.textLabel}>
                   Your advertisement goes here...
                </Text> 
            </Body>
        </CardItem>
    </Card>
);

export default AdvtBanner;