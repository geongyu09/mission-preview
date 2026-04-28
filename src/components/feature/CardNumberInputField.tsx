import styled from "@emotion/styled";
import FieldLayout from "../common/FieldLayout";
import Input from "../common/Input";

const CardNumberInputField = () => {
  return (
    <FieldLayout
      labelComponent={<label htmlFor="cardNumber">카드 번호</label>}
      InputComponent={
        <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
      }
      helperTextComponent={
        <HelperText>본인 명의의 카드만 결제 가능합니다.</HelperText>
      }
    />
  );
};

const HelperText = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 9.5px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default CardNumberInputField;
