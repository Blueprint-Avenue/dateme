import "./App.css";
import DateCards from "./components/DateCards";
import Header from "./components/Header";
import SwipeButtons from "./components/SwipeButtons";

function App() {
	return (
		<div className="app">
			{/* Header */}
			<Header />
			{/* Date Cards */}
			<DateCards />
			{/* SwipeButtons */}
			<SwipeButtons />
		</div>
	);
}

export default App;
