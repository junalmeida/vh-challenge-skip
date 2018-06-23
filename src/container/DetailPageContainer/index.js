// @flow
import * as React from "react";
import { Item, Input, Form, Label } from "native-base";
import { Picker, TextInput } from "react-native";
import DetailPage from "../../stories/screens/DetailPage";
import ReviewsStore, { Item as IItem } from "../../store/DomainStore/ReviewsStore";
import { inject } from "mobx-react/native";
export interface Props {
    navigation: any,
    reviewsStore: ReviewsStore,
}
export interface State {}
@inject("reviewsStore")
export default class DetailPageContainer extends React.Component<Props, State> {

    item: IItem;

    loadCategories() {
        return this.props.reviewsStore.categoryList.map(categ => (
            <Picker.Item key={categ} label={categ} value={categ} />
        ));
    }

    onSubmit(): boolean {
        return this.props.reviewsStore.save(this.item);
    }
    onRemove() {
        this.props.reviewsStore.remove(this.item);
    }
    render() {
        this.item = this.props.navigation.state.params.item;
        const Fields = ( <Form>
            <Item error={ this.item.nameError ? true : false}>
                <Label active Text="Restaurant name" />
                <Input placeholder="Restaurant name" value={ this.item.place.name }
                    editable={false} />
            </Item>
            <Item error={this.item.categoryError ? true : false} >
                <Label active Text="Category" />
                <Picker selectedValue={ this.item.category }
                    style={{
                        height: 50,
                        width: "100%"
                    }}
                    onValueChange={(itemValue, itemIndex) => {
                        this.item.category = itemValue;
                        this.setState({});
                    }} >
                    {this.loadCategories()}
                </Picker>
            </Item>
            <Item error={this.item.reviewError ? true : false} >
                <Label active Text="Review" />
                <TextInput multiline value={ this.item.review } onChangeText={ e => {
                    this.item.review = e;
                    this.setState({});
                }} />
            </Item>

        </Form>
        );
        return <DetailPage navigation={ this.props.navigation } form={ Fields } onSubmit={ () => this.onSubmit() } onRemove={ () => this.onRemove() } />;
    }
}
