import React from "react"
import ReactDOM  from "react-dom"
import { Provider } from "react-redux"
import App from './App'
import store from './MovieApp/store'
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
)