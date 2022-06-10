import react from "react";
import imageReact from "../assets/ReactNative.png";

function LoginScreen({ navigation }) {
	const inputStyle = {};
	return (
		<div style={{ marginRight: "auto", marginLeft: "auto", marginTop: "2vw" }}>
			<img
				src={imageReact}
				style={{
					height: "70%",
					width: "90%",
				}}
			/>
			<div style={{ marginTop: "2vw" }}>
				<label htmlFor="uername">Username : </label>
				<br />
				<input style={{ height: "90%", width: "90%" }} />
				<br />
				<label htmlFor="password">Password : </label>
				<br />
				<input style={{ height: "90%", width: "90%" }} />
			</div>
			<button
				onClick={() => {
					navigation.navigate("MultipleRoleScreen");
				}}
				style={{ marginTop: "2vw" }}>
				Sign In
			</button>
		</div>
	);
}
export default LoginScreen;
