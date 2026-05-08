import styled from "@emotion/styled";
import Card from "../components/common/shared/ui/Card";
import CardInfoForm from "../components/feature/pages/AddCardPage/CardInfoForm";

const AddCardPage = () => {
  return (
    <Wrapper>
      <CardInfoForm>
        {({ cardNumbers }) => <Card cardNumber={+cardNumbers.join("")} />}
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
