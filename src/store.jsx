import { configureStore } from '@reduxjs/toolkit'

import Packages from './slice/packege'

 const Store = configureStore({
    reducer: {
         Packages : Packages,
        },
})

export default Store