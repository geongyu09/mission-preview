import styled from "@emotion/styled";
import Card from "../components/Card";

const AddCardPage = () => {
  const cardNumber = 1234567812345678;
  const validityPeriod = {
    month: 12,
    year: 34,
  };
  return (
    <Wrapper>
      <Card cardNumber={cardNumber} validityPeriod={validityPeriod} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
`;

export default AddCardPage;
