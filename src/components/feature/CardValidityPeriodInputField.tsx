import styled from "@emotion/styled";
import FieldLayout from "../common/FieldLayout";
import Input from "../common/Input";
import { useId } from "react";

const CardValidityPeriodInputField = () => {
  const CardValidityPeriodInputId = useId();

  return (
    <FieldLayout
      labelComponent={
        <label htmlFor={CardValidityPeriodInputId}>유효기간</label>
      }
      InputComponent={
        <InputWrapper>
          <Input id={CardValidityPeriodInputId} placeholder="MM" />
          <Input id={CardValidityPeriodInputId} placeholder="YY" />
        </InputWrapper>
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

const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export default CardValidityPeriodInputField;
