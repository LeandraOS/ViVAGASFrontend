import React from 'react';
import { ItemList } from './styles';
import { CardDetails } from './CardDetails';

function CardLists({
  items, icon, title, numberOfItemsToRender,
}) {
  // Use o método `slice` para limitar o número de itens a serem renderizados
  const renderedItems = items.slice(0, numberOfItemsToRender);

  return (
    <CardDetails icon={icon} title={title}>
      {renderedItems.map((item, index) => (
        <ItemList key={index}>{item}</ItemList>
      ))}
    </CardDetails>
  );
}

export default CardLists;
