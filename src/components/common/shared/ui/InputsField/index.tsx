import styled from "@emotion/styled";
import FieldLayout from "../../layout/FieldLayout";
import Input from "../Input";
import type { ComponentProps } from "react";

interface CardNumberInputFieldProps {
  label: string;
  inputProps: Omit<ComponentProps<typeof Input>, "id">[];
}

const InputsField = ({ label, inputProps }: CardNumberInputFieldProps) => {
  return (
    <FieldLayout
      labelComponent={<label htmlFor="cardNumber">{label}</label>}
      InputComponent={
        <InputWrapper>
          {inputProps.map((props, index) => (
            <Input key={index} id={`cardNumber-${index}`} {...props} />
          ))}
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

export default InputsField;
