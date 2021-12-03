import { atom, selector } from "recoil";

const pageState = atom({
  key: "pageState",
  default: 1
})

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
    const page = get(pageState);

    return {
      area: filter.area,
      stage: filter.stage,
      type: filter.type,
      inputText: input,
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

export { pageState, filterState, inputState, queryState, restaurantDataState, nearShopDataState };
