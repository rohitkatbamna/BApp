import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

function LoginScreen({ navigation }) {
	return (
		<KeyboardAwareScrollView>
			<Image
				source={require("../assets/ReactNative.png")}
				style={styles.tinyLogo}
			/>
			<View style={styles.main_view}>
				<Text style={styles.logIn_text}>Log In</Text>
				<TextInput label="Username" style={styles.input_main} />
				<TextInput
					secureTextEntry={true}
					style={styles.input_main}
					label="Password"
					mode="flat"
				/>
				<Button mode="contained" style={styles.signin_button}>
					Sign In
				</Button>
				<Button mode="defualt" onPress={() => console.log("Pressed")}>
					Forget Password ?
				</Button>
			</View>
		</KeyboardAwareScrollView>
	);
}
export default LoginScreen;

const styles = StyleSheet.create({
	tinyLogo: {
		width: "30%",
		height: "30%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "10%",
	},
	main_view: {
		marginTop: "8%",
	},
	logIn_text: {
		textAlign: "center",
		fontSize: 20,
		color: "blue",
		fontWeight: "bold",
		marginBottom: "2%",
	},
	input_main: {
		fontSize: 20,
		margin: "3%",
	},
	submit_button: {
		margin: 10,
	},
	submit_button_text: {
		fontSize: 25,
		borderWidth: 4,
	},
	signin_button: {
		margin: "5%",
		padding: "2%",
	},
});
