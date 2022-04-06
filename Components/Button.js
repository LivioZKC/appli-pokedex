import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function CustomButton(props) {

        const {text, color, displaycolor, setTextparent, ...restProps} = props

        console.log(text, color);

        return(
            <Button
                /*onPress={() => displaycolor(color)} */
                onPress={() => setTextparent(color)}
                title={text}
                color={color}
                accessibilityLabel="Learn more about this purple button"

            />

        );
}

const styles = StyleSheet.create({
});
