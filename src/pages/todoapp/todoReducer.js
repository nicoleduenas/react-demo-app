export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];
    case 'delete':
      return [...state.filter(x => x.id !== action.payload)];
    case 'toggle':
      return [...state.map(x => {
        if(x.id === action.payload.id){
          x.done = action.payload.done;
        }
        return x;
      })];
    default:
      return state;
  }
};
