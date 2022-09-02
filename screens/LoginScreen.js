import React, { Component } from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import * as RootNavigation from '../navigation/RootNavigation.js';

export default class LoginScreen extends Component {
    navigationOptions = {
        header: null,
    };

    render() {
        console.log(this.props.navigation);
        return (
            <ImageBackground style={styles.imageBack} source={ require('../assets/images/auth_back.png') }>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Image source={ require('../assets/images/logo.png') } style={styles.auth_logo} ></Image>
                    <Input
                        placeholder='Email'
                        inputStyle={styles.inputStyle}
                        containerStyle={ styles.inputContainerStyle }
                        placeholderTextColor="white"
                        leftIcon={
                            <Icon
                            name='user'
                            size={24}
                            color='white'
                            style={{ marginRight: 10}}
                            />
                        }
                        />
                    <Input
                        placeholder='Password'
                        inputStyle={styles.inputStyle}
                        containerStyle={ styles.inputContainerStyle }
                        placeholderTextColor="white"
                        leftIcon={
                            <Icon
                            name='lock'
                            size={24}
                            color='white'
                            style={{ marginRight: 10}}
                            />
                        }
                        />

                    <Button
                        title="LOGIN"
                        buttonStyle={ styles.btnStyle }
                        containerStyle={ styles.btnContainerStyle }
                        onPress={() => { RootNavigation.navigate('Root', {screen: 'HOME'}) }}
                    />
                    <Button
                        title="SIGNUP"
                        buttonStyle={ styles.btnStyle }
                        containerStyle={ styles.btnContainerStyle }
                        onPress={() => { this.props.navigation.navigate('SIGNUP') }}
                    />
                    <Text style={ styles.copyright }>©2020 RGBF CORP</Text>
                </ScrollView>
            </ImageBackground>
          );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
    // backgroundColor: '#292b30'
  },
  contentInnerStyle: {
      justifyContent: 'center'
  },
  btnStyle: {
    backgroundColor: '#28303f',
    borderWidth: 0.2,
    borderColor: 'white'
  },
  btnContainerStyle: {
    backgroundColor: 'grey',
    marginTop: 10,
    width: 200,
    borderRadius: 5
  },
  inputStyle: {
      color: 'white'
  },
  inputContainerStyle: {
      marginTop: 15,
      marginBottom: 15,
      width: 360
  },
  auth_logo: {
    width: 200,
    height: 100,
    resizeMode: 'contain',
    marginTop: 80,
    marginBottom: 40
  },
  copyright: {
    color: 'white',
    fontSize: 16,
    marginBottom: 50,
    marginTop: 100
  },
  imageBack: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#292b30'
  },
  contentContainer: {
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
