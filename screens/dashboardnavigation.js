import react from "react";
import {
	View,
	Text,
	StyleSheet,
	Button,
	Alert,
	Pressable,
	Image,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Dashboard from "./dashboard";
import StudentProfile from "./studentProfile";
import Services from "./services";
import Myclasses from "./myClasses";
import { FontAwesome } from "@expo/vector-icons";
import PaymentHistory from "./paymentHistory";

const Drawer = createDrawerNavigator();
function LogoTitle() {
	return (
		<View>
			<Image
				style={styles.image_style}
				source={require("../assets/account.png")}
			/>
			<Text style={styles.name_text}>Name</Text>
			<Text style={styles.rollno_text}>Roll No.</Text>
		</View>
	);
}
function DashboardNavigation({ navigation }) {
	return (
		<Drawer.Navigator initialRouteName="Dashboard">
			<Drawer.Screen
				name="Profile"
				component={StudentProfile}
				options={{ title: () => <LogoTitle /> }}
			/>
			<Drawer.Screen
				name="Dashboard"
				component={Dashboard}
				options={{
					headerRight: () => (
						<FontAwesome
							name="bell"
							size={24}
							color="black"
							style={styles.bell_icon}
							onPress={() => navigation.navigate("alertsnotices")}
						/>
					),
					title: "Dashboard",
				}}
			/>
			<Drawer.Screen
				name="services"
				component={Services}
				options={{
					title: "Services",
					headerRight: () => (
						<FontAwesome
							name="bell"
							size={24}
							color="black"
							style={styles.bell_icon}
							onPress={() => navigation.navigate("alertsnotices")}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="myclasses"
				component={Myclasses}
				options={{
					title: "My Classes",
					headerRight: () => (
						<FontAwesome
							name="bell"
							size={24}
							color="black"
							style={styles.bell_icon}
							onPress={() => navigation.navigate("alertsnotices")}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="paymenthistory"
				component={PaymentHistory}
				options={{
					title: "Payment History",
					headerRight: () => (
						<FontAwesome
							name="bell"
							size={24}
							color="black"
							style={styles.bell_icon}
							onPress={() => navigation.navigate("alertsnotices")}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}

const styles = StyleSheet.create({
	bell_icon: {
		marginRight: "10%",
	},
	image_style: {
		width: 75,
		height: 75,
		marginLeft: "auto",
		marginRight: "auto",
	},
	name_text: {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: "10%",
	},
	rollno_text: {
		textAlign: "center",
		fontWeight: "bold",
		marginTop: "10%",
	},
});
export default DashboardNavigation;
