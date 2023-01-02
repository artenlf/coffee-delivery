import { createContext, ReactNode, useContext } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

export interface AddressFormProps {
  postalCode: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;

}

interface AddressContextProviderProps {
  children: ReactNode;
}

interface AddressContextProps {
  addressFields: AddressFormProps;
  onSubmit: SubmitHandler<any>;
}

export const addressDefaultValues = {
  postalCode: "",
  street: "",
  number: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
}

const AddressContext = createContext({} as AddressContextProps);

export function useAddress() {
  return useContext(AddressContext)
}

export function AddressContextProvider({ children }: AddressContextProviderProps) {

  const [addressFields, setAddressFields] = useLocalStorage<AddressFormProps>("address-fields", addressDefaultValues)

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<AddressFormProps> = async (data) => {
    setAddressFields(data);
    navigate('/success');
  };

  return <AddressContext.Provider value={{ addressFields, onSubmit }}>
    {children}
  </ AddressContext.Provider >
}

