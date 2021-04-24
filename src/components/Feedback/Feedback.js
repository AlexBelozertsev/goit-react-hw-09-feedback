import React, { useState } from 'react';
import style from './Feedback.module.css';

import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notifications from './Notification';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const HandleIncrement = evt => {
    const btnName = evt.target.textContent.toLowerCase();
    switch (btnName) {
      case 'good':
        setGood(good + 1);
        return;
      case 'neutral':
        setNeutral(neutral + 1);
        return;
      case 'bad':
        setBad(bad + 1);
        return;
      default:
        alert(`Please, reload page`);
        return;
    }
  };

  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    good ? Math.round((good * 100) / countTotalFeedback()) : 0;

  return (
    <div className={style.Feedback}>
      <Section title="Please, leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={HandleIncrement}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notifications message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
