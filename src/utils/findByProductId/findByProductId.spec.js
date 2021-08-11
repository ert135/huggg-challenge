import findByProductId from "./findByProductId";

describe('findByProductId', () => {
  it('returns a closure', () => {
    const result = findByProductId(10);

    expect(typeof result).toBe("function");
  });

  it('returns true if the given brands products array matches an item from the closure', () => {
    const result = findByProductId(10)({products: [10, 20]});

    expect(result).toBe(true);
  });

  it('returns false if the given brands products array doesnt match an item from the closure', () => {
    const result = findByProductId(99)({products: [10, 20]});

    expect(result).toBe(false);
  });
});
