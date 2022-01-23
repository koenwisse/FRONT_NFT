# Action

An action is an object with a mandatory property `type` and an optional payload (payload can be anything). Analogy: an action is an "event".

# Reducer

A reducer keeps track of the state. A reducer is a function which takes two arguments:

1. The initial state.
2. An action (object with `type` property).
   The reducer then returns the updated state. The type of the first argument (initial state)
   is the same type as the return type of the Reducer, i.e.: function myReducer(initialState: A, action: {type: string}): A
   The reducer is a synchronous function, in other words `await`, `async` and `Promise` may not be used here!
   A reducer is a "pure function", meaning it has no side effects and does not modify any variables outside of its own function scope.

# Store

A container that holds our app's local state

# Dispatch

`dispatch` is a function which takes one argument: an action

# Action creator

An _action creator_ is a function that creates and returns an action object. We typically use these so we don't have to write the action object by hand every time:

```js
// actions.js
export const TODOS_LOADED = "todos/todosLoaded";

const todosLoaded = (todos) => {
  return {
    type: TODOS_LOADED,
    payload: todos,
  };
};
```

We then use them by calling the action creator, and then passing the resulting action object directly to dispatch:

```js
store.dispatch(todosLoaded(["Buy milk", "Buy bread"]));
```

# Selector

Function that knows how to extract pieces of information from a store state value
useSelector is react Hook

```js
const selectBankAccountBalance = (reduxState) => reduxState.balance;
```

# Thunk action

A thunk (thunk action) comes from the `redux-thunk` npm library.

The thunk is dispatched by calling the "thunk action creator":

```js
function TodoComponent({ todoId }) {
  const dispatch = useDispatch();

  const onFetchClicked = () => {
    // Calls the thunk action creator, and passes the thunk function to dispatch
    dispatch(fetchTodoById(todoId));
  };
}
```

# Thunk function

A thunk function is a function that accepts two arguments: the Redux store `dispatch` method, and the Redux store `getState` method. Thunk functions are not directly called by application code. Instead, they are passed to `store.dispatch()`:

```js
// Dispatching thunk functions
async function thunkFunction(dispatch, getState) {
  // logic here that can dispatch actions or read state
}

store.dispatch(thunkFunction);
```

Thunk functions do not return any value, but they can call `dispatch` to initiate more thunk actions.

# Thunk action creator

In the same way that Redux code normally uses action creators to generate action objects for dispatching instead of writing action objects by hand, we normally use thunk action creators to generate the thunk functions that are dispatched. A thunk action creator is a function that may have some arguments, and returns a new thunk function. The thunk typically closes over any arguments passed to the action creator, so they can be used in the logic:

```js
// Thunk action creators and thunk functions:

// fetchTodoById is the "thunk action creator"
export function fetchTodoById(todoId) {
  // fetchTodoByIdThunk is the "thunk function"
  // dispatch: dispatch actions to the reducer
  // getState: to get data from redux state
  return async function fetchTodosThunk(dispatch, getState) {
    const response = await axios.get(`/fakeApi/todo/${todoId}`);
    // todosLoaded is a regular "action creator" (not a "thunk action creator")
    dispatch(todosLoaded(response.data.todos)); // goes to the reducer
    // the above commented line is the same as:
    // dispatch(
    //   // goes to the reducer
    //   // todosLoaded is the "action creator"
    //   (function todosLoaded(todos) {
    //     return {
    //       type: TODOS_LOADED,
    //       payload: todos,
    //     };
    //   })(response.data.todos) // execute the "action creator" right away
    // );
  };
}

// dispatch a "thunk action" by calling the "thunk action creator" named `fetchTodoById`
store.dispatch(fetchTodoById(123)); // goes to `redux-thunk`
```

# Summary

Why redux?

1. To manage state globally instead of locally on component / page level
2. Because its easier to share state between components
3. React-redux makes your app more efficient because the component only gets redrawn when need (if component depends on state that was updated)

Flow:

There are two `dispatch` functions:

1. a `dispatch` from the `redux` library
2. a `dispatch` from the `redux-thunk` library.

The flow starts with calling the `dispatch` from the `redux-thunk` library.
This `dispatch` takes one argument: a "thunk function" (= `fetchSpacesThunk`).
This "thunk function" can be obtained by calling a "thunk action creator" function (= `fetchSpaces`).
The "thunk action creator" function returns a "thunk function" when it's executed (don't forget the parenthesis when calling it, e.g. `fetchSpaces()`). A "thunk action creator" function takes as many arguments as needed (can be zero arguments `fetchSpaces()`, one argument `fetchTodoById(id)` or multiple arguments `changePassword(oldPassword, newPassword)`).
When `redux-thunk` receives the "thunk function" (= `fetchSpacesThunk`), it is executed at a later moment by the middleware.
When the "thunk function" is executed, it contacts an API and then passes the response
from the API to an "action creator" (= `spacesLoaded`). The "action creator" takes as many arguments as need to build the payload (can be zero arguments, one argument or multiple arguments). The "action creator" then returns an "action" object (which has a `type` property - e.g. with `type: SPACES_LOADED`). The "action" is then dispatched using the `dispatch`from the`redux` library by the "thunk function" (the `dispatch` from the `redux` library is given by `redux-thunk` to the "thunk function" as the first argument, so you don't have to import it separately).
