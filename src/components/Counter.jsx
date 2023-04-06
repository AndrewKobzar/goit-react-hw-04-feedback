import {  useState } from 'react';
import Statistics from './Statistics.jsx';
import s from './style.module.css'

const Counter = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  const handleGood = () => {
    return setGood(prevGood => prevGood+1);
  }
  const handleNeutral = () => {
    return setNeutral(prevNeutral => prevNeutral + 1);
  };
  const handleBad= () => {
    return setBad(prevBad => prevBad + 1);
  };

  const total = Math.round(good + neutral + bad);
  const countPositiveFeedbackPercentage = Math.round((good / total) * 100);

  return (
    <>
      {' '}
      <div className={s.container}>
        <h1 className={s.title}>Please leave feedback</h1>
        <div>
          <ul className={s.btnList}>
            <li className={s.btnItem}>
              <button className={s.btn} onClick={handleGood} type="button">
                Good
              </button>
            </li>
            <li className={s.btnItem}>
              {' '}
              <button className={s.btn} onClick={handleNeutral} type="button">
                Neutral
              </button>
            </li>
            <li className={s.btnItem}>
              <button className={s.btn} onClick={handleBad} type="button">
                Bad
              </button>
            </li>
          </ul>
          <Statistics
            total={total}
            bad={bad}
            good={good}
            neutral={neutral}
            countTotalFeedback={total}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </div>
      </div>
    </>
  );
};
  



// class Counter extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//     total: 0,
//     positivePercentage: 0,
//   };

//   countTotalFeedback = (good, neutral, bad) => {
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = (good, total) => {
//     return Math.round((good / total) * 100);
//   };

//   render() {
//     return (
//       <div className={s.container}>
//         <h1 className={s.title}>Please leave feedback</h1>
//         <div>
//           <ul className={s.btnList}>
//             <li className={s.btnItem}>
//               <button
//                 className={s.btn}
//                 onClick={() => {
//                   this.setState(prevState => ({
//                     good: prevState.good + 1,
//                     total: prevState.total + 1,
//                   }));
//                 }}
//                 type="button"
//               >
//                 Good
//               </button>
//             </li>
//             <li className={s.btnItem}>
//               {' '}
//               <button
//                 className={s.btn}
//                 onClick={() => {
//                   this.setState(prevState => ({
//                     neutral: prevState.neutral + 1,
//                     total: prevState.total + 1,
//                   }));
//                 }}
//                 type="button"
//               >
//                 Neutral
//               </button>
//             </li>
//             <li className={s.btnItem}>
//               <button
//                 className={s.btn}
//                 onClick={() => {
//                   this.setState(prevState => ({
//                     bad: prevState.bad + 1,
//                     total: prevState.total + 1,
//                   }));
//                 }}
//                 type="button"
//               >
//                 Bad
//               </button>
//             </li>
//           </ul>
//           <Statistics
//             total={this.state.total}
//             bad={this.state.bad}
//             good={this.state.good}
//             neutral={this.state.neutral}
//             positivePercentage={this.state.positivePercentage}
//             countTotalFeedback={this.countTotalFeedback}
//             countPositiveFeedbackPercentage={
//               this.countPositiveFeedbackPercentage
//             }
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default Counter;