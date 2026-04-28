import styled from "@emotion/styled";
import Card from "../components/common/Card";
import CardInfoForm from "../components/feature/CardInfoForm";

const AddCardPage = () => {
  return (
    <Wrapper>
      <CardInfoForm>
        {({ cardNumber, validityPeriod }) => (
          <Card cardNumber={cardNumber} validityPeriod={validityPeriod} />
        )}
      </CardInfoForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default AddCardPage;
