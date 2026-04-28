import styled from "@emotion/styled";
import InputField from "../common/InputField";
import { useState } from "react";
import CardValidityPeriodInputField from "./CardValidityPeriodInputField";
import CardNumberInputField from "./CardNumberInputField";
import CardCVCInputField from "./CardCVCInputField";

interface CardInfo {
  cardNumber: number;
  validityPeriod: {
    month: number;
    year: number;
  };
  cvc: number;
}

const DEFAULT_CARD_INFO: CardInfo = {
  cardNumber: 0,
  validityPeriod: {
    month: 0,
    year: 0,
  },
  cvc: 0,
};

interface CardInfoFormProps {
  children?: (cardInfo: CardInfo) => React.ReactNode;
}

const CardInfoForm = ({ children }: CardInfoFormProps) => {
  const [cardInfo, setCardInfo] = useState<CardInfo>(DEFAULT_CARD_INFO);

  return (
    <>
      {children && children(cardInfo)}
      <form>
        <FormSectionTitle>결제할 카드 번호를 입력해 주세요</FormSectionTitle>
        <FormSectionDescription>
          본인 명의의 카드만 결제 가능합니다.
        </FormSectionDescription>
        <CardNumberInputField />

        {/*  */}
        <FormSectionTitle>카드 유효기간을 입력해 주세요</FormSectionTitle>
        <FormSectionDescription>
          월/년도(MMYY)를 순서대로 입력해 주세요.
        </FormSectionDescription>
        <CardValidityPeriodInputField />

        {/*  */}
        <FormSectionTitle>CVC 번호를 입력해 주세요</FormSectionTitle>
        <CardCVCInputField />
      </form>
    </>
  );
};

const FormSectionTitle = styled.h2`
  font-weight: 700;
  font-style: Bold;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;

const FormSectionDescription = styled.p`
  font-weight: 400;
  font-style: Regular;
  font-size: 9.5px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
`;

export default CardInfoForm;
