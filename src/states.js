import { atom, selector } from "recoil";
import axios from "axios";

const filterState = atom({
  key: "filterState",
  default: {}
})

const inputState = atom({
  key: "inputState",
  default: []
})

const queryState = selector({
  key: "queryState",
  get: ({ get })=> {
    const filter = get(filterState);
    const input = get(inputState);

    return {
      area: filter.area,
      stage: filter.stage,
      type: filter.type,
      inputData: input
    }
  }
})

const restaurantDataState = atom({
  key: "restaurantDataState",
  default: []
})

const nearShopDataState = atom({
  key: "nearShopDataState",
  default: [],
})

export { filterState, inputState, queryState, restaurantDataState, nearShopDataState };
