import * as React from 'react';
import { Avatar } from 'react-native-elements';

export default function ProfileComponent() {
    return(
        <Avatar.Image size={24} source={require('../images/avatar-photo.jpg')} />
    );
}
