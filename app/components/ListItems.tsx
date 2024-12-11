import React from "react";

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="gap-16 bg-amber-600 hover:bg-blue-50 px-4 py-2 rounded">
    {children}
  </li>
);

export default function HorizontalList() {
  return (
    <ul className="flex justify-center items-center gap-4">
      <ListItem>
        <a href="#">Home</a>
      </ListItem>
      <ListItem>
        <a href="#">Ensemble</a>
      </ListItem>
      <ListItem>
        <a href="#">Boka Biljett</a>
      </ListItem>
      <ListItem>
        <a href="#">Hitta Hit</a>
      </ListItem>
      <ListItem>
        <a href="#">Samarbeten</a>
      </ListItem>
      <ListItem>
        <a href="#">Tidigare Produktioner</a>
      </ListItem>
    </ul>
  );
}
