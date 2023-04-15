import { FormValues } from "../types/form";
import styles from '../styles/calculator/results.module.css';
import calculateBodyFatPercentage from "../utils/bodyFatFormula";
import generateBodyFatResults from "../utils/calculatorResultsGenerator";

const Results = ({ formValues }: { formValues: FormValues }) => {
  const { bodyFatPercentage, leanBodyMass, bodyFatWeight } = calculateBodyFatPercentage(formValues);
  const bodyFatResults = generateBodyFatResults(formValues, bodyFatPercentage);

  return (
    <div className={styles.results}>
      <h1 className={styles.formBanner}>Results</h1>
      <h2 className={styles.mainHeading}>Body Fat: {bodyFatPercentage}%</h2>
      <div className={styles.bar}>
        <div className={`${styles.barSegment} ${styles.essential} ${styles.barCategories}`}>Essential 2%</div>
        <div className={`${styles.barSegment} ${styles.athletes} ${styles.barCategories}`}>Athletes 6-14%</div>
        <div className={`${styles.barSegment} ${styles.fitness} ${styles.barCategories}`}>Fitness 14-18%</div>
        <div className={`${styles.barSegment} ${styles.average} ${styles.barCategories}`}>Average 18-25%</div>
        <div className={`${styles.barSegment} ${styles.obese} ${styles.barCategories}`}>Obese</div>
      </div>
      <table className={styles.resultsTable}>
        <tbody>
          <tr>
            <td>Category:</td>
            <td>{bodyFatResults.category}</td>
          </tr>
          <tr>
            <td>Body Fat Weight:</td>
            <td>{bodyFatWeight} kg</td>
          </tr>
          <tr>
            <td>Lean Body Mass:</td>
            <td>{leanBodyMass} kg</td>
          </tr>
          <tr>
            <td>Ideal Body Fat:</td>
            <td>{bodyFatResults.idealBodyFat}%</td>
          </tr>
          <tr>
            <td>Body Fat to Lose:</td>
            <td>{bodyFatResults.bodyFatToLose} kg</td>
          </tr>
          <tr>
            <td>BMI:</td>
            <td>{bodyFatResults.bmi}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Results;
