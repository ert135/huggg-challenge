import findById from "./findById";

describe('FindById', () => {
  it('returns a closure', () => {
    const result = findById(10);

    expect(typeof result).toBe("function");
  });

  it('returns true if the given item matches the id from the closure', () => {
    const result = findById(10)({id: 10});

    expect(result).toBe(true);
  });

  it('returns false if the given item does not match the id from the closure', () => {
    const result = findById(10)({id: 999});

    expect(result).toBe(false);
  });
});
