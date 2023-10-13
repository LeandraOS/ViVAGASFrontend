import React from 'react';
import { Select, Tag } from 'antd';
import { Label, Wrapper, SelectColor } from './styles';

const options = [];
for (let i = 1; i <= 9; i++) { // Altere o loop para criar opções de 1 a 9
  options.push({
    label: i.toString(),
    value: i.toString(),
  });
}

const tagRender = (props) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color="#C6E4FF"
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{
        marginRight: 3,
        color: '#2878BE',
        border: '1px solid #8FC9FC',
      }}
    >
      {label}
    </Tag>
  );
};

const PeriodSelect = ({ value, onChange }) => {
  const handleChange = (selectedValues) => {
    if (onChange) {
      onChange(selectedValues);
    }
  };

  return (
    <SelectColor
      mode="multiple"
      allowClear
      style={{
        width: '15%',
      }}
      placeholder="Filtrar por período"
      value={value}
      onChange={handleChange}
      tagRender={tagRender}
      options={options}
    />
  );
};

export default PeriodSelect;
