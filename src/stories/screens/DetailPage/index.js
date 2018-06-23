import * as React from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, View } from "native-base";
import { Alert } from "react-native";
import styles from "./styles";
import { Item } from "../../../store/DomainStore/ReviewsStore";
export interface Props {
    navigation: any;
    form: any;
    onSubmit: Function;
	onRemove: Function;
}
export interface State {}
export default class DetailPage extends React.Component<Props, State> {

	onSubmit() {
		if (!this.props.onSubmit()) {
			Alert.alert("Please check your review and try again.");
		}
		else {
			this.goBack();
		}
	}

	onRemove() {
		this.props.onRemove();
		this.goBack();
	}

	goBack() {
		this.props.navigation.state.params.goBack();
		this.props.navigation.goBack();
	}

	render() {
        const item: Item = this.props.navigation.state.params.item;

		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.goBack()}>
							<Icon name="ios-arrow-back" />
						</Button>
					</Left>

					<Body style={{ flex: 3 }}>
						<Title>{item && item.place && item.place.name ? item.place.name : "Restaurant"}</Title>
					</Body>

					<Right />
				</Header>

				<Content padder>
                    {this.props.form}
                    <View padder style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between"
                    }}>
                        <Button onPress={() => this.onSubmit() } >
                           <Text>Save</Text>
                        </Button>
                        <Button onPress={() => this.onRemove()} >
                           <Text>Remove</Text>
                        </Button>
                    </View>
				</Content>
			</Container>
		);
	}
}
