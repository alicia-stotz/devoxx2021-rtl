import React from 'react';

export interface IInputNumberProps {
  children?: JSX.Element;
  error?: string;
  componentClass?: string;
  placeholder: string;
  title: string;
  name: string;
  id: string;
  setInputNumber: (inputValue: number) => void;
  inputNumber: number;
  setInvalidNumber?: (isInvalid: boolean) => void;
}

export const InputNumber = ({
  children,
  error,
  componentClass,
  setInputNumber,
  inputNumber,
  placeholder,
  title,
  name,
  id,
  setInvalidNumber
}: IInputNumberProps) => {
  const typeNumberHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    setInputNumber(parseInt(e.currentTarget.value, 10));
    if (setInvalidNumber) {
      setInvalidNumber(false);
    }
  }

  const preventKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'e' || e.key === ',' || e.key === '.' || e.key === ';') {
      e.preventDefault();
    }
  }

  return <div className={`input-group has-validation${componentClass ? ` ${componentClass}` : ""}`}>
    <input
      type="number"
      id={id}
      name={name}
      onInput={typeNumberHandler}
      title={title}
      className={`form-control ${error ? " is-invalid" : ""}`}
      min="0"
      onKeyDown={preventKeyDownHandler}
      value={inputNumber || ""}
      placeholder={placeholder} />
    {
      error ?
        <div className="invalid-feedback" title="Pokemon already exist">
          {error}
        </div>
        : null
    }
    {children ? children : null}
  </div>
};