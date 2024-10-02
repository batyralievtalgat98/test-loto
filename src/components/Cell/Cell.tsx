import { FC } from "react";
import styles from './Cell.module.scss'
interface CellProps {
    number: number | null;
}
export const Cell: FC<CellProps> = ({ number }) => {
  return <div className={styles.cell}>{number}</div>;
};
