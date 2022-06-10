import react from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Platform,
} from "react-native";
import reactimage from "../assets/ReactNative.png";

function Dashboard({ navigation }) {
	return (
		<View style={styles.main_view}>
			<View style={styles.first_row}>
				{Platform.OS === "web" ? (
					<img src={reactimage} style={{ width: "20%", margin: "auto" }} />
				) : (
					<Image
						source={require("../assets/ReactNative.png")}
						style={styles.tinyLogo}
					/>
				)}
				<Text style={styles.text_bschool}>B School</Text>
			</View>
			<View style={styles.second_row}>
				<TouchableOpacity
					style={styles.first_column}
					onPress={() => {
						navigation.navigate("services");
					}}>
					<Text style={styles.first_column_text}>Services</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.second_column}
					onPress={() => {
						navigation.navigate("myclasses");
					}}>
					<Text style={styles.second_column_text}>My Classes</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default Dashboard;
const styles = StyleSheet.create({
	main_view: {
		flex: 1,
		marginTop: "4%",
		width: Platform.OS === "web" ? "50%" : "100%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	first_row: {
		flex: 0.7,
		borderWidth: 5,
		marginLeft: "3%",
		marginRight: "3%",
		borderRadius: 10,
	},
	tinyLogo: {
		height: "70%",
		width: "50%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "10%",
	},
	text_bschool: {
		textAlign: "center",
		marginTop: "3%",
		fontSize: 20,
		fontWeight: "bold",
	},
	second_row: {
		flex: 1,
		flexDirection: "row",
		marginLeft: "3%",
		marginRight: "3%",
		marginTop: "5%",
		justifyContent: "space-between",
	},
	first_column: {
		width: "45%",
		height: "45%",
		borderWidth: 3,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
	},
	first_column_text: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
		fontSize: 20,
	},
	second_column: {
		width: "45%",
		height: "45%",
		borderWidth: 3,
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
	},
	second_column_text: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
		fontSize: 20,
	},
});
