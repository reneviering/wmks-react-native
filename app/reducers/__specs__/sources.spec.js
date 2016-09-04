import sut from '../sources.js';

const initialState = {
	sources: [],
	selectedSource: 'hacker-news'
};

describe('sources reducer', () => {
	it('returns default state on invalid action and without initial state', () => {
		const expectedState = {
			sources: [],
			selectedSource: 'hacker-news'
		};
		expect(sut(undefined, {})).to.deep.equal(expectedState);
	});

	it('adds articles after invoking »RECEIVE_SOURCES«', () => {
		const action = {
			type: 'RECEIVE_SOURCES',
			sources: [
				{
					name: 'foo'
				}
			]
		};
		expect(sut(initialState, action).sources).to.deep.equal(action.sources);
	});

	it('sets the selectedSource after invoking »CHANGE_SOURCE«', () => {
		const action = {
			type: 'CHANGE_SOURCE',
			source: 'BBC'
		};
		expect(sut(initialState, action).selectedSource).to.deep.equal('BBC');
	});
});
