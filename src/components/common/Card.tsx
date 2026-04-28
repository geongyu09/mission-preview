import styled from "@emotion/styled";
// import masterCard from "../assets/Mastercard.png";

interface CardProps {
  cardNumber: number;
  validityPeriod: {
    month: number;
    year: number;
  };
}

function splitCardNumber(cardNumber: number) {
  const result: number[] = [];

  const output: number[] = [];

  `${cardNumber}`.split("").forEach((nbr) => {
    output.push(+nbr);

    if (output.length === 4) {
      result.push(+output.join(""));
      output.length = 0;
    }
  });

  return result;
}

const Card = ({ cardNumber, validityPeriod }: CardProps) => {
  const cardNumberParts = splitCardNumber(cardNumber);
  const shownCardNumberParts = cardNumberParts.map((part, index) => {
    if (index > 1) return "****";
    return part;
  });
  const { month, year } = validityPeriod;

  return (
    <Wrapper>
      <ChipWrapper>
        <Chip />
        {/* <MasterCardImg src={masterCard} /> */}
      </ChipWrapper>
      <CardNumberWrapper>
        {shownCardNumberParts.map((part, index) => (
          <CardNumberUnit key={`${index}-${part}`}>{part}</CardNumberUnit>
        ))}
      </CardNumberWrapper>
      <CardValidityPeriodWrapper>
        <CardValidityPeriodUnit>
          {month}/{year}
        </CardValidityPeriodUnit>
      </CardValidityPeriodWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 13rem;
  height: 8rem;
  background-color: #333;
  border-radius: 0.25rem;
  box-shadow: 3px 3px 5px 0px #00000040;
`;

const ChipWrapper = styled.div`
  display: flex;
  padding: 0.5rem 0.75rem;
  justify-content: space-between;
`;

const Chip = styled.div`
  width: 2.25rem;
  height: 1.5rem;
  background-color: #ddcd78;
  border-radius: 0.2rem;
`;

const MasterCardImg = styled.img`
  width: 2.25rem;
  height: 1.5rem;
`;

const CardNumberWrapper = styled.div`
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;
  margin-top: 0.875rem;
`;

const CardNumberUnit = styled.span`
  font-weight: 500;
  font-style: Medium;
  font-size: 0.875rem;
  color: #fff;
  letter-spacing: 16%;
  display: flex;
  align-items: center;
`;

const CardValidityPeriodWrapper = styled.div`
  display: flex;
  padding-inline: 1rem;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

const CardValidityPeriodUnit = styled.span`
  font-weight: 500;
  font-style: Medium;
  font-size: 0.875rem;
  color: #fff;
  letter-spacing: 16%;
`;

export default Card;
