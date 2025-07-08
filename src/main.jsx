
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
import { store } from './rhedux/store.js'

createRoot(document.getElementById('root')).render(


    <Provider store={store}>
        <App/>
    </Provider>
)
