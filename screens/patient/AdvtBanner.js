import * as React from 'react';
import { View } from 'react-native';
import { Card, CardItem, Body, Thumbnail } from 'native-base';
import { styles } from '../styles/defaultStyles.js'

const AdvtBanner = () => (
    <Card> 
        <CardItem>
            <Body style={styles.buttonContainer}>           
                <Thumbnail large square source={require('../images/advtBanner-1.jfif')} 
                    style={{width:'23%'}}/>
                <Thumbnail large square source={require('../images/advtBanner-2.png')} 
                    style={{width:'23%'}}/>
                <Thumbnail large square source={require('../images/advtBanner-3.jfif')} 
                    style={{width:'23%'}}/>
                <Thumbnail large square source={require('../images/advtBanner-4.jfif')} 
                    style={{width:'23%'}}/>
            </Body>
        </CardItem>
    </Card>
);

export default AdvtBanner; 