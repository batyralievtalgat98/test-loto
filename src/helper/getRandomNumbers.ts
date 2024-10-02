export const getRandomNumbers = () => {
    const createRow = (existingRows:(number | null)[][]) => {
      const row = new Array(9).fill(null);
      while (row.filter(Boolean).length < 5) {
        const randomNum = Math.floor(Math.random() * 90) + 1;
        const randomNumCheck = randomNum === 90 ? 8 : Math.floor(randomNum / 10);
        const isDuplicate = row[randomNumCheck] !== null || existingRows.some(existingRow => existingRow[randomNumCheck] === randomNum);
  
        if (!isDuplicate) {
          row[randomNumCheck] = randomNum;
        }
      }
      return row;
    };
  
    const numbersRowOne = createRow([]);
    const numbersRowTwo = createRow([numbersRowOne]);
    const numbersRowThree = createRow([numbersRowOne, numbersRowTwo]);
  
    return [numbersRowOne, numbersRowTwo, numbersRowThree];
  };