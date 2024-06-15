// app/pokemon/layout.tsx
import { FC, ReactNode } from 'react';

const PokemonLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default PokemonLayout;
