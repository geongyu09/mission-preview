/**
 * 카드 번호를 4자리씩 나누어 배열로 반환하는 함수입니다.
 */
export const splitCardNumber = (cardNumber: string) => {
  const result: string[] = [];

  const output: string[] = [];

  `${cardNumber}`.split("").forEach((nbr) => {
    output.push(nbr);

    if (output.length === 4) {
      result.push(output.join(""));
      output.length = 0;
    }
  });

  return result;
};
