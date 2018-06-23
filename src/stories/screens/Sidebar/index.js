import * as React from "react";
import { Image, Platform } from "react-native";
import { Text, Container, List, ListItem, Content, Header, Footer, Body, View, Title } from "native-base";
import { NavigationActions } from "react-navigation";

const routes = [
	{
		route: "Home",
		caption: "My Reviews",
	},
	{
		route: "Login",
		caption: "Logout",
	},
];

export interface Props {
	navigation: any,
}
export interface State {}
const resetAction = NavigationActions.reset({
	index: 0,
	actions: [NavigationActions.navigate({ routeName: "Login" })],
});
export default class Sidebar extends React.Component<Props, State> {
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
					<List
						style={{ marginTop: 5 }}
						dataArray={routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.route === "Login"
											? this.props.navigation.dispatch(resetAction)
											: this.props.navigation.navigate(data.route);
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
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
