import clsx from "clsx";
import s from "./Feedback.module.css";
const Feedback = ({ feedbacks, totalFeedback, goodPercentage }) => {
  return (
    <div>
      <h2 className="title">Feedback Results</h2>
      <div className={s.wrapper}>
        <div className={s.column}>
          <p className={clsx(s.result, s.neon, s.good)}>
            Good: <span>{feedbacks.good}</span>
          </p>
          <p className={clsx(s.result, s.neon, s.neutral)}>
            Neutral: <span>{feedbacks.neutral}</span>
          </p>
          <p className={clsx(s.result, s.neon, s.bad)}>
            Bad: <span>{feedbacks.bad}</span>
          </p>
        </div>
        <div className={s.column}>
          <p className={clsx(s.result, s.neon, s.stat)}>
            Total: <span>{totalFeedback}</span>
          </p>
          <p className={clsx(s.result, s.neon, s.stat)}>
            Rate: <span>{goodPercentage}%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
