import react from "react";
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	Platform,
} from "react-native";

function Services({ navigation }) {
	return (
		<View style={styles.main_view}>
			<View style={styles.main_row}>
				<TouchableOpacity
					style={styles.view_block}
					onPress={() => {
						navigation.navigate("applyleave");
					}}>
					<Text style={styles.column_text}>Apply Leave</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.view_block}
					onPress={() => {
						navigation.navigate("payfees");
					}}>
					<Text style={styles.column_text}>Pay Fee</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.view_block}
					onPress={() => {
						navigation.navigate("courseregistration");
					}}>
					<Text style={styles.column_text}>Course Registration</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.view_block}
					onPress={() => {
						navigation.navigate("virtualclassroom");
					}}>
					<Text style={styles.column_text}>Virtual Classroom</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.view_block}>
					<Text style={styles.column_text}>Learning Hub</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
export default Services;
const styles = StyleSheet.create({
	main_view: {
		marginTop: "4%",
		flex: 1,
		flexWrap: "wrap",
	},
	main_row: {
		flex: 0.5,
		marginLeft: "3%",
		marginRight: "3%",
		flexDirection: "row",
		justifyContent: "space-between",
		flexWrap: "wrap",
		alignContent: "space-between",
	},
	column_text: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
		fontSize: 20,
	},
	view_block: {
		width: Platform.OS === "web" ? "30%" : "100%",
		marginRight: "auto",
		marginLeft: "auto",
		height: "45%",
		borderWidth: 3,
		marginTop: "5%",
		borderRadius: 10,
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
	},
});
