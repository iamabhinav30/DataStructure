# Why redux ? -> why should you use it
1. when your application become complicated
2. predictable chages : given you clear steps to update the data
3. Centralized Store: your all apps data is stored at one place(store), 
                      which makes easier to manage and control the state
4. Reusable login : redux logic can be reused
5. Complex and bigger web apps
6. Active community/ Bigger community in redux to seek some help if you get somewhere stuck
7. Debugging is easy in redux

# What is redux ?
-> A third party state management JS library
-> provide you a solution of managing the state of your app in a more organized & controlled manner
-> It centralized your web app's data at one place which is called as store.
-> Redux follow a clear pattern for changing the data through 'actions' and handling those changed data is done with the help of 'reducers'

# what is the core principle behind redux ?
1. Single source of truth 
    - global state are going to be stored at one place(store)
2. State is read only
    - when you want to update the data (or change the state), you have to dispatch an "action", that describes what had happened
3. changes are made with the help of pure functions : based onactions, you are goind to wither reducers(pure functions)

Redux Data flow :
    - Redux is having a unidirectional data flow
    - Redux is always having a single store

initialState : { value: 0}    

# Counter Slice
 name : Counter
 reducer methods
 initialState

# Store
 CounterSlice

# Configure Store

# Provide store to web application
<provider store={store}>
    <App.jsx> -> Counter.jsx -> useSelector() : we will get the initial and updated state
                             -> useDispatch() : we can call any method from reducers to update the state values
</provider>

# --------------------------------------------
# How to setup the redux in react apps
you have to do 2 things :
    -> install react-redux
    -> install redux toolkit (RTK)
        npm i react-redux @reactjs/toolkit 


# useDispatch : it is used to get the actions from the reducers