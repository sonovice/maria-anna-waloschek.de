import { Route, Router } from "@solidjs/router";
import type { Component } from "solid-js";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Vita from "./pages/Vita";
import Impressum from "./pages/Impressum";
import Layout from "./components/Layout";

const App: Component = () => {
	return (
		<Router>
			<Route path="/" component={() => <Layout><Home /></Layout>} />
			<Route path="/vita" component={() => <Layout><Vita /></Layout>} />
			<Route path="/impressum" component={() => <Layout><Impressum /></Layout>} />
			<Route path="*" component={() => <Layout><NotFound /></Layout>} />
		</Router>
	);
};

export default App;
