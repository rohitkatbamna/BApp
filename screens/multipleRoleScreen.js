import react from "react";
import {
	View,
	StyleSheet,
	Text,
	Image,
	Platform,
	useWindowDimensions,
} from "react-native";
import { Button } from "react-native-paper";

import fastforward from "../assets/fastforward.png";

function MultipleRoleScreen({ navigation }) {
	const window = useWindowDimensions();
	return (
		<View>
			<Text style={styles.selectRole_Text}>Select Role</Text>
			<Button mode="contained" style={styles.button_style}>
				Faculty
			</Button>
			<Button
				mode="contained"
				style={styles.button_style}
				onPress={() => navigation.navigate("DashboardNavigation")}>
				Admin
			</Button>
			{Platform.OS === "web" ? (
				<img
					src={fastforward}
					style={{ width: "50%", margin: "auto", height: "50%" }}
				/>
			) : (
				<Image
					source={require("../assets/fastforward.png")}
					style={styles.fast_forward}
				/>
			)}
		</View>
	);
}
export default MultipleRoleScreen;
const styles = StyleSheet.create({
	main_View: {
		flex: Platform.OS === "web" ? 0.5 : 1,
		width: Platform.OS === "web" ? "50%" : "100%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	selectRole_Text: {
		fontWeight: "bold",
		textAlign: "center",
		marginTop: "5%",
	},
	button_style: {
		marginTop: "12%",
		marginLeft: "30%",
		marginRight: "30%",
		padding: "2%",
		borderRadius: 15,
	},
	fast_forward: {
		width: "15%",
		height: "5%",
		marginTop: "10%",
		marginLeft: "auto",
		marginRight: "auto",
	},
});
