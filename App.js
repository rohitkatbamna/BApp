import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/loginScreen";
import ForgetPasswordScreen from "./screens/forgetPasswordScreen";
import MultipleRoleScreen from "./screens/multipleRoleScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardNavigation from "./screens/dashboardnavigation";
import Applyleave from "./screens/applyleave";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator defaultScreenOptions="LoginScreen">
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{
						title: "",
						headerStyle: {
							backgroundColor: "#F2F2F2",
						},
						headerTintColor: "#000",
					}}
				/>
				<Stack.Screen
					name="ForgetPasswordScreen"
					component={ForgetPasswordScreen}
					options={{
						title: "",
						headerStyle: {
							backgroundColor: "#F2F2F2",
						},
						headerTintColor: "#000",
					}}
				/>
				<Stack.Screen
					name="MultipleRoleScreen"
					component={MultipleRoleScreen}
					options={{
						title: "",
						headerStyle: {
							backgroundColor: "#F2F2F2",
						},
						headerTintColor: "#000",
					}}
				/>
				<Stack.Screen
					name="DashboardNavigation"
					component={DashboardNavigation}
					options={{
						title: "",
						headerStyle: {
							backgroundColor: "#F2F2F2",
						},
						headerTintColor: "#000",
						headerShown: false,
					}}
				/>
				<Stack.Screen
					name="applyleave"
					component={Applyleave}
					options={{
						title: "",
						headerStyle: {
							backgroundColor: "#F2F2F2",
						},
						headerTintColor: "#000",
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
