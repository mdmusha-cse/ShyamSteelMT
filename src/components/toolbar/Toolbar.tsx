import React from 'react';
import { View, Text } from 'react-native';
import styles from './ToolbarStyle';

type ItemProps = {title: string};

export default function Toolbar(props:ItemProps) {
    return (
        <View style={styles.toolbar}>
            <Text style={styles._toolbar_name}>{props.title}</Text>
        </View>
    );
}