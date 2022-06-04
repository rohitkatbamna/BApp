import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/loginScreen";
import ForgetPasswordScreen from "./screens/forgetPasswordScreen";

const Stack = createNativeStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator defaultScreenOptions="LoginScreen">
				<Stack.Screen
					name="LoginScreen"
					component={LoginScreen}
					options={{ title: "" }}
				/>
				<Stack.Screen
					name="ForgetPasswordScreen"
					component={ForgetPasswordScreen}
					options={{ title: "Forgot Password" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
