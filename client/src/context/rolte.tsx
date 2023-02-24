import React, { createContext, ReactNode, useContext, useState } from "react";

interface RoleContextType {
  flatNumber: string | undefined;
  setFlatNumber: (flatNumber: string | undefined) => void;
  addMyFlat: boolean;
  setAddMyFlat: (addMyFlat: boolean) => void;
  role: string | undefined;
  setRole: (role: string) => void;
  roleData: roleDataType | undefined;
  setRoleData: (roleData: roleDataType) => void;
  flatMateData: flatMateDataType[] | undefined;
  // setFlatMateData: (flatMateData: flatMateDataType) => void;
  flatData: flatDataType | undefined;
  setFlatData: (flatData: flatDataType) => void;
  addFlatMateData: (data: flatMateDataType) => void;
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
}

interface flatDataType {
  bhk: number | null | undefined;
  bathrooms: number | null | undefined;
  furnished: string;
  availablity: boolean;
  flat: string | undefined;
}

const RoleContext = createContext<RoleContextType>({
  role: undefined,
  setRole: () => {},
  addMyFlat: false,
  setAddMyFlat: () => {},
  roleData: undefined,
  setRoleData: () => {},
  flatMateData: undefined,
  // setFlatMateData: () => {},
  flatData: undefined,
  setFlatData: () => {},
  addFlatMateData: () => {},
  flatNumber: undefined,
  setFlatNumber: () => {},
});

export const RoleProvider: React.FC<RoleProviderProps> = ({ children }) => {
  const [role, setRole] = useState<string | undefined>(undefined);
  const [roleData, setRoleData] = useState<roleDataType | undefined>(undefined);
  const [flatMateData, setFlatMateData] = useState<
    flatMateDataType[] | undefined
  >(undefined);
  const addFlatMateData = (data: flatMateDataType) => {
    setFlatMateData((prev) => (prev ? [...prev, data] : [data]));
  };
  const [flatData, setFlatData] = useState<flatDataType | undefined>(undefined);
  const [addMyFlat, setAddMyFlat] = useState<boolean>(false);
  const [flatNumber, setFlatNumber] = useState<string | undefined>(undefined);

  return (
    <RoleContext.Provider
      value={{
        role,
        setRole,
        roleData,
        setRoleData,
        flatMateData,
        addFlatMateData,
        flatData,
        setFlatData,
        addMyFlat,
        setAddMyFlat,
        flatNumber,
        setFlatNumber,
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
