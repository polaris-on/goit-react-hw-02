import { useState, useEffect } from "react";
import "./App.css";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";

function App() {
  const savedFeedbacks = localStorage.getItem("feedbacks");
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  useEffect(() => {
    if (savedFeedbacks) {
      setFeedbacks(JSON.parse(savedFeedbacks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const updateFeedback = (feedbackType) => {
    if (feedbackType === "reset") {
      setFeedbacks({
        good: 0,
        neutral: 0,
        bad: 0,
      });
      return;
    }
    setFeedbacks((prevFeedbacks) => ({
      ...prevFeedbacks,
      [feedbackType]: prevFeedbacks[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const goodPercentage = Math.round((feedbacks.good / totalFeedback) * 100);

  return (
    <div className="container app-container">
      <Description />
      <Options onFeedback={updateFeedback} totalFeedback={totalFeedback} />
      <div className="feedback-wrapper">
        {totalFeedback > 0 ? (
          <Feedback
            feedbacks={feedbacks}
            totalFeedback={totalFeedback}
            goodPercentage={goodPercentage}
          />
        ) : (
          <Notification />
        )}
      </div>
    </div>
  );
}

export default App;
