export interface Order {
  id: string;
  dishId: string;
  dishName: string;
  dishImage: string;
  quantity: number;
  totalPrice: number;
  deposit: number;
  clientId: string;
  clientName: string;
  cookId: string;
  pickupPointId: string;
  pickupTime: Date;
  status: 'pending' | 'confirmed' | 'ready' | 'completed' | 'cancelled';
  createdAt: Date;
  paymentStatus: 'deposit_paid' | 'fully_paid';
}