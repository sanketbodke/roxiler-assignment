import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import AppRoutes from "./routes/AppRoute";
import {GlobalStyle} from "./style/Global.styled";
import { store, persistor } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
const App = () => {

    const queryClient = new QueryClient({})

    return (
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={null}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <GlobalStyle />
                        <AppRoutes />
                    </Router>
                </QueryClientProvider>
            </PersistGate>
        </Provider>
    )
}

export default App;