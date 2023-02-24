import React, { createContext, ReactNode, useContext, useState } from "react";

interface RoleContextType {
  role: string | undefined;
  setRole: (role: string) => void;
  roleData: roleDataType | undefined;
  setRoleData: (roleData: roleDataType) => void;
  flatMateData: flatMateDataType | undefined;
  setFlatMateData: (flatMateData: flatMateDataType) => void;
}

interface RoleProviderProps {
  children: ReactNode;
}

interface roleDataType {
  name: string;
  register: string;
  email: string;
  password: string;
}

interface flatMateDataType {
  name: string;
  register: string;
}[];

const RoleContext = createContext<RoleContextType>({
  role: undefined,
  setRole: () => {},
  roleData: undefined,
  setRoleData: () => {},
  flatMateData: undefined,
  setFlatMateData: () => {},
});

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const [role, setRole] = useState<string | undefined>(undefined);
  const [roleData, setRoleData] = useState<roleDataType | undefined>(undefined);
  const [flatMateData, setFlatMateData] = useState<
    flatMateDataType | undefined
  >(undefined);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        roleData,
        setRoleData,
        flatMateData,
        setFlatMateData,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
