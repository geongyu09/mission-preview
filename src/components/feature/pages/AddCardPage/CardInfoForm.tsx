import styled from "@emotion/styled";
import { useState } from "react";
import InputsField from "../../../common/shared/ui/InputsField";
import InputField from "../../../common/shared/ui/InputField";

interface CardInfo {
  cardNumbers: [string, string, string, string];
  validityPeriod: {
    month: string;
    year: string;
  };
  cvc: string;
}

const DEFAULT_CARD_INFO: CardInfo = {
  cardNumbers: ["", "", "", ""],
  validityPeriod: {
    month: "",
    year: "",
  },
  cvc: "",
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
        {/* <CardNumberInputField /> */}
        <InputsField
          label="카드 번호"
          inputProps={[
            {
              placeholder: "1234",
              value: cardInfo.cardNumbers[0].slice(0, 4),
              onChange: (e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue))
                  setCardInfo((prev) => ({
                    ...prev,
                    cardNumbers: [
                      e.target.value.slice(0, 4),
                      prev.cardNumbers[1],
                      prev.cardNumbers[2],
                      prev.cardNumbers[3],
                    ],
                  }));
              },
            },
            {
              value: cardInfo.cardNumbers[1].slice(0, 4),
              onChange: (e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue))
                  setCardInfo((prev) => ({
                    ...prev,
                    cardNumbers: [
                      prev.cardNumbers[0],
                      inputValue.slice(0, 4),
                      prev.cardNumbers[2],
                      prev.cardNumbers[3],
                    ],
                  }));
              },
            },
            {
              value: cardInfo.cardNumbers[2].slice(0, 4),
              onChange: (e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue))
                  setCardInfo((prev) => ({
                    ...prev,
                    cardNumbers: [
                      prev.cardNumbers[0],
                      prev.cardNumbers[1],
                      inputValue.slice(0, 4),
                      prev.cardNumbers[3],
                    ],
                  }));
              },
            },
            {
              value: cardInfo.cardNumbers[3].slice(0, 4),
              onChange: (e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue))
                  setCardInfo((prev) => ({
                    ...prev,
                    cardNumbers: [
                      prev.cardNumbers[0],
                      prev.cardNumbers[1],
                      prev.cardNumbers[2],
                      inputValue.slice(0, 4),
                    ],
                  }));
              },
            },
          ]}
        />

        {/*  */}
        <FormSectionTitle>카드 유효기간을 입력해 주세요</FormSectionTitle>
        <FormSectionDescription>
          월/년도(MMYY)를 순서대로 입력해 주세요.
        </FormSectionDescription>
        <InputsField
          label="유효기간"
          inputProps={[
            {
              placeholder: "MM",
              fullWidth: true,
              value: cardInfo.validityPeriod.month,
              onChange: (e) => {
                const inputValue = e.target.value;
                if (
                  /^\d*$/.test(inputValue) &&
                  inputValue.length <= 2 &&
                  +inputValue <= 12 &&
                  +inputValue >= 1
                )
                  setCardInfo((prev) => ({
                    ...prev,
                    validityPeriod: {
                      ...prev.validityPeriod,
                      month: inputValue.slice(0, 2),
                    },
                  }));
              },
            },
            {
              placeholder: "YY",
              fullWidth: true,
              value: cardInfo.validityPeriod.year,
              onChange: (e) => {
                const inputValue = e.target.value;
                if (/^\d*$/.test(inputValue) && inputValue.length <= 2)
                  setCardInfo((prev) => ({
                    ...prev,
                    validityPeriod: {
                      ...prev.validityPeriod,
                      year: inputValue.slice(0, 2),
                    },
                  }));
              },
            },
          ]}
        />

        {/*  */}
        <FormSectionTitle>CVC 번호를 입력해 주세요</FormSectionTitle>
        <InputField
          label="CVC"
          placeholder="CVC"
          value={cardInfo.cvc}
          onChange={(e) => {
            const inputValue = e.target.value;
            if (/^\d*$/.test(inputValue)) {
              //TODO: magic number
              setCardInfo((prev) => ({ ...prev, cvc: inputValue.slice(0, 3) }));
            }
          }}
        />
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
