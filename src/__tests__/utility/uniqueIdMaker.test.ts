import uniqueIdMaker from '../../functions/utility/uniqueIdMaker';

describe('uniqueIdMaker', () => {
  it('creates new unique id maker', () => {
    const uniqueUserId = uniqueIdMaker();
    const uniqueContactId = uniqueIdMaker();

    expect(`user${uniqueUserId()}`).toBe(`user0`);
    expect(`user${uniqueUserId()}`).toBe(`user1`);
    expect(`user${uniqueUserId()}`).toBe(`user2`);

    expect(`contact${uniqueContactId()}`).toBe(`contact0`);
    expect(`contact${uniqueContactId()}`).toBe(`contact1`);
    expect(`contact${uniqueContactId()}`).toBe(`contact2`);
  });
});
