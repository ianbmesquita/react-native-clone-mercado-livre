import React from 'react';
import { View, Text, Image, TextInput } from 'react-native';

import Button from '../../components/Button';

import logo from '../../../assets/logo.png';

import styles from './styles';

export default function RedefinePass() {
    return (
        <View style={styles.container}>
            <Image source={logo} />
            
            <View style={styles.containerInput}>
                <TextInput
                    name="user"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    placeholder="Email"
                    style={styles.input}
                />
            </View>
            
            <Button style="outline" onPress={false}>
                <Text style={styles.text_primary}>Redefinir Senha</Text>
            </Button>
        </View>
    );
}
