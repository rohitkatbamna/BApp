import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function LoginScreen({ navigation }) {
	const [onFocuschange, setOnfocuschange] = useState(false);
	return (
		<KeyboardAwareScrollView>
			<View style={styles.main_view}>
				<Text style={styles.input_label}>Username</Text>
				<TextInput placeholder="Email@example.com" style={styles.input_main} />
				<Text style={styles.input_label}>Password</Text>
				<TextInput
					placeholder="*******"
					secureTextEntry={true}
					style={styles.input_main}
				/>
				<Button
					icon="camera"
					mode="contained"
					onPress={() => console.log("Pressed")}>
					Press me
				</Button>
			</View>
		</KeyboardAwareScrollView>
	);
}
export default LoginScreen;

const styles = StyleSheet.create({
	input_label: {
		fontSize: 25,
		borderRadius: 5,
		margin: "5%",
	},
	input_main: {
		fontSize: 25,
		borderWidth: 2,
		margin: "5%",
		borderRadius: 10,
	},
	main_view: {
		marginTop: "40%",
	},
	submit_button: {
		margin: 10,
	},
	submit_button_text: {
		fontSize: 25,
		borderWidth: 4,
	},
});
