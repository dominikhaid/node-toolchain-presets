/**
 * Contains a given dateTime string and the diff to the acutal dateTime
 * @typedef {Object} IDiffDateToNow
 * @property {string} dateTime - dateTime to compare
 * @property {string} dateTimeNow - actual dateTime
 * @property {string} dateTimeDiff - the diffrence
 */
interface IDiffDateToNow {
  dateTime: string;
  dateTimeNow: string;
  dateTimeDiff: number;
}
