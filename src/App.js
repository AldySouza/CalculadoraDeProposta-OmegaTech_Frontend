import Home from "./pages/home/home";
import Login from "./pages/login/login";
import "./pages/globals.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="*" element={<div>404 NotFound</div>} />
					{/* <Route path="/create" element={<Proposta />} />
					<Route path="/" element={<Login />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
