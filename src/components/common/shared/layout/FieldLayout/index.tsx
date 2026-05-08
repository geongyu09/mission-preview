import styled from "@emotion/styled";

interface FieldLayoutProps {
  labelComponent: React.ReactNode;
  InputComponent: React.ReactNode;
  helperTextComponent?: React.ReactNode;
}

const FieldLayout = ({
  labelComponent,
  InputComponent,
  helperTextComponent,
}: FieldLayoutProps) => {
  return (
    <InputFieldWrapper>
      {labelComponent}
      {InputComponent}
      {helperTextComponent}
    </InputFieldWrapper>
  );
};

const InputFieldWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export default FieldLayout;
