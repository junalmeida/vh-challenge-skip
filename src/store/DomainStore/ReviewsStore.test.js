import { ReviewsStore, Item } from "./ReviewsStore";
import data from "./data";

describe("ReviewsStore", () => {
	it("should save new item", () => {
		const store = new ReviewsStore();
		store.items = data;

		var expectedData = {
			"place": {
				"name": "This is a test"
			},
			"category": "Generic",
			"review": "Spicy jalapeno bacon ipsum dolor amet beef ribs burgdoggen beef, hamburger pancetta cow swine doner pork belly t-bone shank. "
		};

		var expectedArray = data.splice(0).push(expectedData); //splice to clone

		const itemToSave = new Item(data.place);
		itemToSave.category = data.category;
		itemToSave.review = data.review;

		//call it
		store.save(itemToSave);

		var actualJSON = JSON.stringify(store.items);
		var expectedJSON = JSON.stringify(expectedArray);
		expect(expectedJSON).toEqual(actualJSON);
	});
});
