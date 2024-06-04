export const sessionStorageMiddleware = ({ getState }) => {
    return next => action => {
      const result = next(action);
      const state = getState();
      sessionStorage.setItem('reduxState', JSON.stringify(state));
      return result;
    };
  };
  
  export const loadState = () => {
    try {
      const serializedState = sessionStorage.getItem('reduxState');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  };