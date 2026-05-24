import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ClockContext from "./context/ClockContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ClockContext>

            <App/>
        </ClockContext>
    </StrictMode>,
)
