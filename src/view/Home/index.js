import React from 'react';
import { View, Text, Image } from 'react-native';

import Button from '../../components/Button';

import logo from '../../../assets/logo.png';

import styles from './styles';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Image source={logo} />
            
            <Button 
                style="outline" 
                onPress={() => navigation.navigate('Login')}
            >
                <Text>Entrar</Text>
            </Button>

            <Button onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.text_white}>Criar Conta</Text>
            </Button>
        </View >
    );
}
