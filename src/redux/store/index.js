import { createStore, CombineReducers, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducer";
import { handler as defaultSaga } from "../saga";

const reducers = combineReducers({
  app: reducer,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(defaultSaga);

export default store;
