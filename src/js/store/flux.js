const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],

			planets: [],

			favorites: []
		},
		actions: {
			loadPeople: async () => {
				const url = "https://3000-aquamarine-snail-y58vanzu.ws-us03.gitpod.io/character";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ peoples: data });
			},

			loadPlanet: async () => {
				const url = "https://3000-aquamarine-snail-y58vanzu.ws-us03.gitpod.io/planets";
				const response = await fetch(url);
				const data = await response.json();
				setStore({ planets: data });
			},

			addFavorite: (name, type) => {
				const store = getStore();
				let count = 0;
				store.favorites.map(each => {
					if (each.name == name) {
						count = 1;
					}
				});
				if (count == 0) {
					setStore({
						favorites: [
							...store.favorites,
							{
								name: name,
								type: type
							}
						]
					});
				}
			},

			deleteFavorite: id => {
				const store = getStore();

				const newFavorites = store.favorites.filter((item, i) => i !== id);
				setStore({ favorites: newFavorites });
			}
		}
	};
};

export default getState;
