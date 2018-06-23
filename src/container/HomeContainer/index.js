// @flow
import * as React from "react";
import { observer, inject } from "mobx-react/native";

import Home from "../../stories/screens/Home";
import ReviewsStore from "../../store/DomainStore/ReviewsStore";

export interface Props {
	navigation: any,
	reviewsStore: ReviewsStore,
}
export interface State {}

@inject("reviewsStore")
@observer
export default class HomeContainer extends React.Component<Props, State> {
	componentWillMount() {
		//this.props.homeStore.fetchItems();
	}
	render() {
		const list = this.props.reviewsStore.items;
		return <Home navigation={this.props.navigation} list={list} />;
	}
}
