import sut from '../articles.js';

describe('articles reducer', () => {
	it('returns default state on invalid action and without initial state', () => {
		expect(sut(undefined, {})).to.deep.equal([]);
	});

	it('returns added articles after invoking »RECEIVE_ARTICLES«', () => {
		const action = {
			type: 'RECEIVE_ARTICLES',
			articles: [
				{
					name: 'foo'
				}
			]
		};
		expect(sut([], action)).to.deep.equal(action.articles);
	});
	it('returns added articles after invoking »CHANGE_SOURCE«', () => {
		const action = {
			type: 'CHANGE_SOURCE',
			articles: [
				{
					name: 'foo'
				}
			]
		};
		expect(sut([], action)).to.deep.equal(action.articles);
	});
});
