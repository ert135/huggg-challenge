import mapProducts from "./mapProduct"

describe('MapBrand', () => {
  it('maps a brand object', () => {
    const MOCK_BRAND = {
      products: [
        "1",
        "2",
        "3",
      ],
    };

    const mappedResult = mapProducts(MOCK_BRAND);
    expect(mappedResult).toEqual(["1", "2", "3"]);
  });
});
