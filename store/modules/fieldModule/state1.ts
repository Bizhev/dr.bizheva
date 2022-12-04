export default class FieldState {
fields = {
  filterPage: {
    search: {
      name: 'search',
      type: 'text',
      labelPlaceholder: 'Поиск',
      value: '',
    },
    listType: {
      name: 'listType',
      type: 'boolean',
      textOn: 'Горизонтальный',
      textOff: 'Плиточный',
      value: true,
    },
    countElementPage: {
      name: 'countElementPage',
      type: 'text',
      labelPlaceholder: 'количество элементов на странице',
      value: '',
    }

  }
};

pageName = '';
}
