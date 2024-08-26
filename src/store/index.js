import { configureStore, createSlice } from '@reduxjs/toolkit';

const widgetsSlice = createSlice({
  name: 'widgets',
  initialState: {
    categories: [],
    query: '',
  },
  reducers: {
    addWidget: (state, action) => {
      const { category, widget } = action.payload;
      const categoryIndex = state.categories.findIndex(cat => cat.name === category);
      if (categoryIndex !== -1) {
        state.categories[categoryIndex].widgets.push(widget);
      }
    },
    removeWidget: (state, action) => {
      const { category, widgetId } = action.payload;
      const categoryIndex = state.categories.findIndex(cat => cat.name === category);
      if (categoryIndex !== -1) {
        state.categories[categoryIndex].widgets = state.categories[categoryIndex].widgets.filter(widget => widget.id !== widgetId);
      }
    },
    setSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { addWidget, removeWidget, setSearchQuery, setCategories } = widgetsSlice.actions;

const store = configureStore({
  reducer: {
    widgets: widgetsSlice.reducer,
  },
});

export default store;