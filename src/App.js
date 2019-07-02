import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
    state = { loggedIn: false };
    
    componentDidMount() {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBWiq_aXO4p4LYqODs_YNZ3ggDBjQzhVPE',
                authDomain: 'auth-bc535.firebaseapp.com',
                databaseURL: 'https://auth-bc535.firebaseio.com',
                projectId: 'auth-bc535',
                storageBucket: '',
                messagingSenderId: '92178723849',
                appId: '1:92178723849:web:f2c0249d28c73e16'
            });

            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.setState({ loggedIn: true });
                } else {
                    this.setState({ loggedIn: false });
                }
            });
        }
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
           case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
    }
    }

    render() {
        return (
            <View style={styles.viewStyle}>
                <Header headerText="Authentication" />
                {this.renderContent()}
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        height: 40,
        flex: 1
    }
};

export default App;
