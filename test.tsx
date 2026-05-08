import { css } from "@emotion/react";

type InputGroupProps = {
  values: string[];
  onChange: (index: number, value: string) => void;
  count: number;
};

const InputGroup = ({ values, onChange, count }: InputGroupProps) => {
  return (
    <section
      css={css`
        display: flex;
        flex-direction: row;
        gap: 10px;
      `}
    >
            
      {Array.from({ length: count }).map((_, i) => (
        <input
          key={i}
          value={values[i] || ""}
          onChange={(e) => onChange(i, e.target.value)}
          css={css`
            width: 71.25px;
            height: 32px;
          `}
        />
      ))}
          
    </section>
  );
};

export default InputGroup;
