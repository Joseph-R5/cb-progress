import styles from '../styles/calculator/reference.module.css';
import maleUnder40 from '../../data/maleUnder40.json';
import male40AndOver from '../../data/male40andOver.json';
import { FormValues } from '../types/form';

const Reference = ({ formValues }: { formValues: FormValues }) => {
    const { gender, age, weight, height, neck, waist } = formValues;
    const tableData = Number(age) >= 40 ? male40AndOver : maleUnder40;

    return (
      <div className={styles.reference}>
        <div className={styles.banner}>
            <h1>WHO Guidelines</h1> 
        </div>
        <table className={styles.referenceTable}>
          <thead>
            <tr>
              <th>Category</th>
              <th>Body Fat</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, index) => (
              <tr key={index}>
                <td>{row.Category}</td>
                <td>{row.bodyFat}</td>
                <td>{row.Weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

export default Reference;