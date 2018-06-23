import ReviewsStore, { Item } from "../DomainStore/ReviewsStore";

describe("ReviewsStore", () => {
	it("should save new item", () => {
		const data = require("./data");

		const store = new ReviewsStore();
		store.items = data;

		var expectedData = {
			"place": {
				"name": "This is a test"
			},
			"category": "Generic",
			"review": "Spicy jalapeno bacon ipsum dolor amet beef ribs burgdoggen beef, hamburger pancetta cow swine doner pork belly t-bone shank. "
		};

		var expectedArray = data.slice(0);
		expectedArray.push(expectedData); //slice to clone

		const itemToSave = new Item(expectedData.place);
		itemToSave.category = expectedData.category;
		itemToSave.review = expectedData.review;

		//call it
		store.save(itemToSave);

		var actualJSON = JSON.stringify(store.items);
		var expectedJSON = JSON.stringify(expectedArray);
		expect(expectedJSON).toEqual(actualJSON);
	});
});
