import InputsField from "../../../common/shared/ui/InputsField";

const CardNumberInputField = () => {
  return <InputsField label="카드 번호" inputProps={Array(4).fill({})} />;
};

export default CardNumberInputField;
