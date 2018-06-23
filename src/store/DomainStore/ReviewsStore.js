import {
  observable,
  action, computed
} from "mobx";
import {
  persist
} from "mobx-persist";

export interface IPlace {
  placeID: string;
	website: string;
	phoneNumber: string;
	address: string;
	name: string;
	latitude: number;
	longitude: number;
}
export class Item {
  constructor(place: IPlace) {
    this.place = place;
    this.category = "Generic"; //TODO: Make this not hard-coded.
  }
  @persist @observable place: IPlace;
  @persist @observable category: string;
  @persist @observable review: string;

  @computed get reviewError () {
    return !(this.review && this.review.length > 0);
  }
  @computed get categoryError () {
    return !(this.category && this.category.length > 0);
  }
  @computed get isValid () {
    return !this.reviewError && !this.categoryError;
  }
}

export default class ReviewsStore {
  constructor() { }
   /** @description Holds a list of possible categories of restaurants
   */
  @persist("list") @observable categoryList: string[] = [];

   /** @description Holds a list of reviews made by the user
   */
  @persist("list") @observable items: Item[] = [];

  /** @description Save this item and push it to the store of reviews
   * @param {Item} item An item to remove.
   */
  @action
  save(item: Item):boolean {
    //
    if (item && item.isValid) {
      console.log("saving: " + JSON.stringify(item));
      if (item && this.items.indexOf(item) === -1) {
        this.items.push(item);
        console.log("pushed");
        return true;
      }
    }
    else
    {
      return false;
    }
  }

  /** @description Removes an item from the reviews store.
   * @param {Item} item An item to remove.
   */
  @action
  remove(item: Item) {
    console.log("removing: " + JSON.stringify(item));
     if (item) {
      let index = this.items.indexOf(item);
      if (index > -1) {
        this.items.splice(index, 1);
        console.log("removed");
      }
    }
  }

  /** @description Clear all the reviews made by the user.
   */
  @action
  clear() {
    this.items.clear();
  }
}
