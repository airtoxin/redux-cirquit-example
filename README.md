# redux-cirquit-example

Example project using redux-cirquit

## [single-object-state](/single-object-state)

Simple example.
The state was managed by singe big object.

## [split-reducers](/split-reducers)

Example for realworld.
The state was consisting of many sub-reducers.
Reducers combined by redux's `combineReducers` function.

Big difference of single-object-state example is `namespace` option.
Both of `createCirquitReducer` and `createOperation` are invoked with `namespace` option.


## [typescript](/typescript)

TypeScript example.
