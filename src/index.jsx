import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./main/App";

import "./index.css";

import Home from "./components/Home";
import Search from "./components/Search";
import Movie from "./components/Movie";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={ <App /> }>
					<Route path="/" element={ <Home /> } />
					<Route path="movie/:id" element={ <Movie /> } />
					<Route path="search" element={ <Search /> } />
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
);
