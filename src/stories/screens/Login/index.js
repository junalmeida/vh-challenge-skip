// @flow
import * as React from "react";
import { Image, Platform } from "react-native";
import { Container, Content, Header, Body, Title, Button, Text, View, Footer } from "native-base";
//import styles from "./styles";
export interface Props {
	loginForm: any,
	onLogin: Function
}
export interface State {}
export default class Login extends React.Component<Props, State> {
	render() {
		return (
			<Container>
				<Header style={{ height: 150 }}>
					<Body style={{ alignItems: "center" }}>
						<Image
							source={require("../../../../assets/vh.png")}
							style={{ width: 104, height: 70 }}
						/>
						<Title>Coding Challenge</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }}>
								Marcos Almeida Jr.
							</Text>
						</View>
					</Body>
				</Header>
				<Content>
					{this.props.loginForm}
					<View padder>
						<Button block onPress={() => this.props.onLogin()}>
							<Text>Login</Text>
						</Button>
					</View>
				</Content>
				<Footer style={{ backgroundColor: "#F8F8F8" }}>
					<View style={{ alignItems: "center", opacity: 0.5, flexDirection: "row" }}>
						<View padder>
							<Text style={{ color: "#000" }}>Made for </Text>
						</View>
						<Image
							source={require("../../../../assets/logo-sd.png")}
							style={{ width: 422 / 4, height: 98 / 4 }} resizeMode={"contain"}
						/>
					</View>
				</Footer>
			</Container>
		);
	}
}

