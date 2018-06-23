import * as React from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import RNGooglePlaces from "react-native-google-places";
import styles from "./styles";
import { Item as IItem, IPlace } from "../../../store/DomainStore/ReviewsStore";
export interface Props {
  navigation: any;
  list: IItem[];
}
export interface State {}
class Home extends React.Component<Props, State> {

  openSearchModal() {
    //open the search box to search for a restaurant
    RNGooglePlaces.openPlacePickerModal({
      type: "restaurant"
    })
    .then((place: IPlace) => {
      //navigate to details page to give a review
      if (place && place.name) {
        this.props.navigation.navigate("DetailPage",{
          item: new IItem(place),
          goBack: () => this.goBack()
        });
      }
    })
    .catch(error => console.log(error.message));  // error is a Javascript Error object
  }

  goBack() {
    this.setState({});
    this.props.navigation.goBack();
  }
  render() {
    const list = this.props.list.filter(x => x.weekday === this.props.weekday);
    console.log("render list: " + this.props.list.length + "/" + list.length);
    console.log("last: " + JSON.stringify(this.props.list[this.props.list.length - 1]));
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.navigation.navigate("DrawerOpen")}
              />
            </Button>
          </Left>
          <Body>
            <Title>My Reviews</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                active
                name="add"
                onPress={() => this.openSearchModal()}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {list.map((item, i) => (
              <ListItem
                key={i}
                onPress={() =>
                  this.props.navigation.navigate("DetailPage", {
                    item: item,
                    goBack: () => this.goBack()
                  })}
              >
                <Text>{item.place.name}</Text>
              </ListItem>
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default Home;
