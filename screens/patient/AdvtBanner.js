import * as React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';
import { footerStyles } from '../styles/footerStyles.js'

const AdvtBanner = () => (
    <Card>
        <CardItem>
            <Body>
                <Text>
                    Your advertisement goes here...
                </Text>
            </Body>
        </CardItem>
    </Card>
);

export default AdvtBanner;