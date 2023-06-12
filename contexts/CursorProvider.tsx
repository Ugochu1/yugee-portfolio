import { ReactNode, createContext, useContext, useState } from "react";

export interface CursorContext {
  type: "none" | "hover" | "open";
  setType: (type: "none" | "hover" | "open") => void;
}

interface CursorProps {
  children?: ReactNode;
}

const CursorContext = createContext<CursorContext>({
  type: "none",
  setType: () => null,
});

function CursorProvider({ children }: CursorProps) {
  const [type, setType] = useState<"none" | "hover" | "open">("none");
  
  const context: CursorContext = {
    type,
    setType,
  };

  return (
    <CursorContext.Provider value={context}>
      <>{children}</>
    </CursorContext.Provider>
  );
}

export default CursorProvider;

export function useCursor() {
  return useContext(CursorContext);
}
