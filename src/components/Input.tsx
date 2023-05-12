type InputProps = {
  value?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => void;
};

export const Input = ({ value, handleChange }: InputProps) => {
  return (
    <input
      type="text"
      onChange={(event) => handleChange(event, event.target.value)}
    />
  );
};
