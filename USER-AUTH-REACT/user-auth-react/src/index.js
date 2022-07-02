import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from "react-dom/client"



import App from './App'

// ReactDOM.render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>,
//     document.getElementById('root')
// )



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<BrowserRouter>
<App />
</BrowserRouter>);