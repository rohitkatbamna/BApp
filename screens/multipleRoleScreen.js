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
	function WebScreen() {
		return (
			<div className="text-center">
				<button className="btn btn-primary mt-5">Admin</button>
				<br />
				<button
					className="btn btn-primary mt-5"
					onClick={() => {
						navigation.navigate("DashboardNavigation");
					}}>
					Faculty
				</button>
				<br className="mt-5" />
				<div className="mt-5">
					<img src={fastforward} height="10%" width="5%" />
				</div>
			</div>
		);
	}
	function MobileScreen() {
		return (
			<>
				<Button
					mode="contained"
					onPress={() => navigation.navigate("DashboardNavigation")}>
					Press me
				</Button>
				<Button mode="contained" onPress={() => console.log("Admin")}>
					Press me
				</Button>
			</>
		);
	}
	return <>{Platform.OS === "web" ? <WebScreen /> : <MobileScreen />}</>;
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
