import mapStore from "./mapStore"

describe('MapStore', () => {
  it('maps a store object', () => {
    const MOCK_BRAND = {
      id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24",
      stores: [
          "1",
          "2",
          "3",
      ]
    };

    const mappedResult = mapStore(MOCK_BRAND);
    expect(mappedResult).toEqual(["1", "2", "3"]);
  });
});
