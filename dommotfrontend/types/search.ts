export interface SearchData {
    where: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    infants: number;
    pets: number;
  }
  
  export interface SearchFieldProps {
    label: string;
    placeholder: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    hasBorder: boolean;
  }