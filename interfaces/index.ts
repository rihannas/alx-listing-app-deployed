export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  id?: string | number;
  name: string;
  address: Address;
  rating: number;
  description?: string;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}
