import styled from "@emotion/styled";
import { useId, type ComponentProps } from "react";
import Input from "../Input";

interface InputFieldProps extends ComponentProps<typeof Input> {
  label: string;
  helperText?: string;
}

const InputField = ({
  label,
  helperText,
  children,
  ...props
}: InputFieldProps) => {
  const id = useId();
  return (
    <InputFieldWrapper>
      <label htmlFor={id}>{label}</label>
      {children ? children : <Input id={id} {...props} />}
      {helperText && <HelperText>{helperText}</HelperText>}
    </InputFieldWrapper>
  );
};

const InputFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const HelperText = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 9.5px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default InputField;
