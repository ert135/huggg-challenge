import mapBrand from "./mapBrand"

describe('MapBrand', () => {
  it('maps a brand object', () => {
    const MOCK_BRAND = {
      id: "5a4e6d14-53d4-4583-bd6b-49f81b021d24",
      created_at: "2019-03-18 13:09:22",
      updated_at: "2019-06-28 09:42:14",
      name: "Vue Cinemas",
      internal_name: "",
      logo: "arffae49101d293f3509c567549d7d2c91d52ca0cf.jpg",
      colour: "",
      success: "You top human, you. \nBig question is... who gets your next one?",
      share: "I'm using @huggg_uk to send my friends & family a little surprise pick me up! Download and send a huggg too @ api.huggg.me download",
      weight: 5000,
      deleted_at: null,
      expiry: 365,
      website: "https:  www.myvue.com ",
      integration_id: 4,
      user_id: "",
      email: null,
      vat: 20,
      faq: null,
      description: "",
      redeem: null,
      location_text: "the UK",
      map_pin_url: "https:cdn.huggg.melocationsard391c04c5c1eb6bd6a51a5c04fb13b9a4b460a8a.png",
      consolidated: 0,
      default_location_description_markdown: "",
      logo_url: "https:test.huggg.mebrandsarffae49101d293f3509c567549d7d2c91d52ca0cf.jpg"
    };

    const mappedResult = mapBrand(MOCK_BRAND);
    expect(mappedResult).toEqual({
      id: MOCK_BRAND.id,
      logo_url: MOCK_BRAND.logo_url,
      name: MOCK_BRAND.name,
    });
  });
});
