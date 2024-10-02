import { FC } from "react";
import { Cell } from "../Cell/Cell";
import styles from "./Card.module.scss";
import {  useSelector } from "react-redux";
import { getLotoDataSelector } from "../../store/selector/lotoSelector";

interface CardProps {}
export const Card: FC<CardProps> = ({}) => {
  const data = useSelector(getLotoDataSelector);

  return (
    <div className={styles.content}>
      {data.map((row:(number | null)[]) => (
        <div className={styles.row}>
          {row.map((cell:number | null) => (
            <Cell number={cell} />
          ))}
        </div>
      ))}
    </div>
  );
};

