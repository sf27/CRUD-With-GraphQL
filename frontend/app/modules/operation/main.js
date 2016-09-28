import React from "react";
import {render} from "react-dom";
import MainCRoot from "./containers/Root";
import {ApolloProvider} from "react-apollo";
import ApolloClient, {createNetworkInterface} from "apollo-client";

const client = new ApolloClient({
    networkInterface: createNetworkInterface('http://127.0.0.1:8000/graphql'),
});

render(
    <ApolloProvider client={client}>
        <MainCRoot/>
    </ApolloProvider>,
    document.getElementById('main')
);