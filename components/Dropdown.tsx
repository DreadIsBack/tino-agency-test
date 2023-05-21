'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import BackOverlay from './BackOverlay';
import './Dropdown.scss';
import classNames from 'classnames';

export interface DropdownOption {
  value: string;
  text: string;
}

interface Props {
  selectedOption: string | null;
  onSelect?: (optionValue: string | null) => void;
  options: DropdownOption[];
}

export default function Dropdown(props: Props) {
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(props.selectedOption);
  const valueElementRef = useRef<HTMLDivElement | null>(null);
  const [valueElementWidth, setValueWidth] = useState(0);

  useLayoutEffect(() => {
    if (valueElementRef.current) {
      setValueWidth(valueElementRef.current.offsetWidth);
    }
  }, []);

  const open = () => setOpened(true);
  const close = () => setOpened(false);
  const toggle = () => {
    if (opened) {
      close();
    } else {
      open();
    }
  };

  const selectOption = (option: DropdownOption | null) => {
    setSelectedOption(option?.value ?? null);
    close();

    if (props.onSelect) {
      props.onSelect(option?.value ?? null);
    }
  };

  function getOptionText(optionValue: string): string | null {
    return props.options.find(x => x.value === optionValue)?.text ?? null;
  }

  // Classes

  const valueClass = () => classNames('dropdown__value', { 'dropdown__value--opened': opened });
  const optionClass = (option: DropdownOption) => {
    return classNames('dropdown__panel__option', {
      'dropdown__panel__option--selected': selectedOption === option.value,
    });
  };

  return (
    <div>
      <div className={valueClass()} onClick={toggle} ref={valueElementRef}>
        {selectedOption ? getOptionText(selectedOption) : <span>&nbsp;</span>}
      </div>
      {opened && (
        <div>
          <BackOverlay onClick={close} />
          <div className="dropdown__panel" style={{ width: valueElementWidth }}>
            {props.options.map(option => (
              <div
                className={optionClass(option)}
                key={option.value}
                onClick={() => selectOption(option)}
              >
                {option.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
