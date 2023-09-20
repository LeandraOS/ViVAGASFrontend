import React from 'react';
import { ItemList } from './styles';
import { CardDetails } from './CardDetails';

export function CardLists({
  items, icon, title, numberOfItemsToRender,
}) {
  const renderedItems = items.slice(0, numberOfItemsToRender);

  return (
    <CardDetails icon={icon} title={title}>
      {renderedItems.map((item, index) => (
        <ItemList key={index}>{item}</ItemList>
      ))}
    </CardDetails>
  );
}
