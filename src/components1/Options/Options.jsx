import clsx from "clsx";
import s from "./Options.module.css";

const Options = ({ onFeedback, totalFeedback }) => {
  return (
    <div className={clsx(s.buttonWrapper)}>
      <button className={clsx(s.button)} onClick={() => onFeedback("good")}>
        Good
      </button>
      <button className={clsx(s.button)} onClick={() => onFeedback("neutral")}>
        Neutral
      </button>
      <button className={clsx(s.button)} onClick={() => onFeedback("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={clsx(s.button)} onClick={() => onFeedback("reset")}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
