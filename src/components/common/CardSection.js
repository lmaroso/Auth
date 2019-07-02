/* eslint-disable arrow-body-style */
import React from 'react';
import { View } from 'react-native';

const CardSection = ({ center, children }) => {
    const { containerStyle, alternativeContainerStyle } = styles;

    return (
        <View style={[containerStyle, center && alternativeContainerStyle]}>
            {children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#FFF',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    },
    alternativeContainerStyle: {
        justifyContent: 'center'
    }
};

export { CardSection };
