import { FC } from "react";
import { useDispatch } from "react-redux";
import { lotoSliceActions } from "../../store/slices/lotoSlice";
import { getRandomNumbers } from "../../helper/getRandomNumbers";
import styles from './ResetButton.module.scss'
interface ResetButtonProps {}
export const ResetButton: FC<ResetButtonProps> = ({}) => {
  const dispatch = useDispatch();

  const updateData = () => {
    const randomNumbers = getRandomNumbers();
    dispatch(lotoSliceActions.changeData(randomNumbers));
  };
  return <button className={styles.button} onClick={updateData}>Обновить</button>;
};

