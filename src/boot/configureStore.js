import { AsyncStorage } from "react-native";
import ReviewsStore from "../store/DomainStore/ReviewsStore";
import LoginStore from "../store/ViewStore/LoginStore";
import { create } from "mobx-persist";
import categories from "../store/DomainStore/categories";
import data from "../store/DomainStore/data";

export default function() {
	const reviewsStore = new ReviewsStore();
	const loginStore = new LoginStore();
	const hydrate = create({ storage: AsyncStorage, jsonify: true });

	//loads initial data. it will be overriten by hydrate if store already exists
	reviewsStore.items = data;
	reviewsStore.categoryList = categories;

	hydrate("reviews", reviewsStore).catch(err => {
		console.error(err);
	}).then(() => {
		console.info("reviews hydrated");
		//nothing to do yet	
	});
	hydrate("login", loginStore).catch(err => {
		console.error(err);
	});

	return {
		loginStore,
		reviewsStore,
	};
}
