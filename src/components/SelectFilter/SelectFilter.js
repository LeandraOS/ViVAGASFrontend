import React from 'react';
import { Select, Tag } from 'antd';
import { Label, Wrapper } from './styles';
const options = [];
for (let i = 10; i < 36; i++) {
  options.push({
    label: i.toString(36) + i,
    value: i.toString(36) + i,
  });
}
const handleChange = (value) => {
  console.log(`selected ${value}`);
};

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
          color:"#2878BE",
          border: "1px solid #8FC9FC"
        }}
      >{label}</Tag>

    );
  };

export const SelectFilter = () => (
    <>
    
    <Wrapper>
    <Label>Vagas:</Label>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '10%',
          borderColor: "#8FC9FC"
        }}
        placeholder="Selecione"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        tagRender={tagRender}
        options={options}
      />

    <Label>Tecnologia:</Label>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '20%',
        }}
        placeholder="Selecione"
        defaultValue={['a10']}
        onChange={handleChange}
        tagRender={tagRender}
        options={options}
      />

<Label>Laboratório:</Label>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '20%',
        }}
        placeholder="Selecione"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        tagRender={tagRender}

        options={options}
      />
      <Label>Área:</Label>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '20%',
        }}
        placeholder="Selecione"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        tagRender={tagRender}

        options={options}
      />
      <Label>Nível:</Label>
      <Select
        mode="multiple"
        allowClear
        style={{
          width: '20%',
          
        }}
        placeholder="Selecione"
        defaultValue={['a10', 'c12']}
        onChange={handleChange}
        tagRender={tagRender}

        options={options}
      />



    </Wrapper>
    </>
  );
