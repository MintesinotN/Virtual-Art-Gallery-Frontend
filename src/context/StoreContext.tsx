import { createContext, ReactNode, useState } from "react";
import { StoreContextType } from "@/types/data.types";

export const StoreContext = createContext<StoreContextType | null>(null);

interface StoreContextProviderProps {
    children: ReactNode;
  }

const StoreContextProvider: React.FC<StoreContextProviderProps> = (props:any) => {
const [selectedRole, setSelectedRole] = useState<string>("user");
const contextValue: StoreContextType = {
    selectedRole,
    setSelectedRole
}

return (
    <StoreContext.Provider value={contextValue}>
        {props.children}
    </StoreContext.Provider>
)
}

export default StoreContextProvider