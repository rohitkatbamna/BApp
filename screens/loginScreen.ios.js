import React from "react";
import {
	View,
	KeyboardAvoidingView,
	TextInput,
	StyleSheet,
	Text,
	Platform,
	TouchableWithoutFeedback,
	Button,
	Keyboard,
	useWindowDimensions,
	Image,
} from "react-native";
import webimage from "../assets/ReactNative.png";

const LoginScreen = () => {
	const { width, height } = useWindowDimensions();
	const window = {
		widthWeb: width / 5,
		widthMobile: width / 5,
		heightWeb: height / 4,
		heightMobile: height / 10,
	};
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={styles.container}>
			<TouchableWithoutFeedback
				onPress={Platform.OS === "web" ? null : Keyboard.dismiss}>
				<View
					style={
						Platform.OS === "web"
							? { marginRight: "10vw", marginLeft: "10vw" }
							: styles.inner
					}>
					{Platform.OS === "web" ? (
						<img
							src={webimage}
							style={{
								width: "20%",
								height: "40%",
								marginLeft: "auto",
								marginRight: "auto",
								marginTop: "3%",
							}}
						/>
					) : (
						<Image
							source={require("../assets/ReactNative.png")}
							style={{
								width: window.widthMobile,
								height: window.heightMobile,
								marginLeft: "auto",
								marginRight: "auto",
								marginTop: "3%",
							}}
						/>
					)}
					<Text style={styles.header}>Log In</Text>
					<TextInput placeholder="Username" style={styles.textInput} />
					<TextInput
						placeholder="Password"
						style={styles.textInput}
						secureTextEntry={true}
					/>
					<View style={styles.btnContainer}>
						<Button title="Sign In" onPress={() => null} />
					</View>
					<Text>{`Window Dimensions: height - ${height}, width - ${width}`}</Text>
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
};
export default LoginScreen;
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inner: {
		padding: "5%",
		flex: 1,
		justifyContent: "space-around",
	},
	header: {
		fontSize: 36,
		marginBottom: "5%",
		textAlign: "center",
	},
	textInput: {
		height: "4%",
		borderColor: "#000000",
		borderBottomWidth: 1,
		marginBottom: "2%",
		width: "75%",
	},
	btnContainer: {
		backgroundColor: "white",
		marginTop: "3%",
	},
});
