export type TextInputProps = {
  value?: string;
  onChange?(newValue: string): void;
  placeholder?: string;
  label?: string;
};
