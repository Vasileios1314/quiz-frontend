import { Routes, Route } from "react-router-dom";
import YearQuiz from "./components/YearQuiz";
import GamePage from "./pages/GamePage";
import HomePage from "./pages/HomePage";
import QuestionPage from "./pages/QuestionPage";
import ScoreboardPage from "./pages/ScoreboardPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/game" element={<GamePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/year" element={<YearQuiz />} />
        <Route path="/scoreboard" element={<ScoreboardPage />} />
      </Routes>
    </div>
  );
}

export default App;
