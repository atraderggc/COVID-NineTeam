import React, { Component } from 'react'
import { View, Button, TextInput } from 'react-native'

import firebase from 'firebase'

export default class Login extends Component {

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
        this.onSignUp = this.onSignUp.bind(this)
    }

    //TODO: process codes for errors and display to user
    onSignUp() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            console.log(result)
        })
        .catch((error) => {
            console.log(error)
        })
    }


    render() {
        return (
            <View>
                <TextInput
                    placeholder="email"
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    secureTextEntry={ true }
                    onChangeText={password => this.setState({ password })}
                />
                <Button
                    onPress={() => this.onSignUp()}
                    title="Sign In"
                />
            </View>
        )
    }
}
