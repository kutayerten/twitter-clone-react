import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "~/store/modal";
import appearance from "~/store/appearance";

const store = configureStore ({
    reducer : {
        //store
        auth,
        modal,
        appearance,
    }
})

export default store