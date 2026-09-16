export type Destination = {
  id: number;
  city: string;
  country: string;
};

export type NewDestination = Omit<Destination, "id">;
