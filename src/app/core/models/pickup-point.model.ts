export interface PickupPoint {
  id: string;
  name: string;
  address: string;
  city: string;
  zipCode: string;
  cookId: string;
  timeSlots: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  available: boolean;
}