const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			views: ["SERIES", "MOVIES", "SEARCH", "BILLBOARD", "PROFILE"],
			activeViewIndex: 1,
			elementToDisplay: null,
		},
		actions: {
			// Use getActions to call a function within a fuction
			getActiveView: _ => {
				let views = getStore().views;
				let index = getStore().activeViewIndex;
				return views[index];
			},
			setActiveViewIndex: index => {
				let store = getStore();
				store.activeViewIndex = index;
				setStore(store);
			},
			setElementToDisplay: movie => {
				let store = getStore();
				store.elementToDisplay = movie;
				setStore(store);
			},
			emptyElementToDisplay: _ => {
				let store = getStore();
				store.elementToDisplay = null;
				setStore(store);
			},
		},
	};
};

export default getState;
