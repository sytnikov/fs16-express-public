import { ordersData } from '../data/ordersData';
import { productsData } from '../data/productsData';
import { Order } from '../types/Order';

export function getAll() {
  return ordersData;
}

export function getSingle(orderId: number) {
  const order = ordersData.find((order) => order.id === orderId);
  return order;
}

export function createOne(newOrder: Order) {
  const order = ordersData.find((order) => order.id === newOrder.id);

  if (!order) {
    newOrder.id = ordersData.length + 1;
    ordersData.push(newOrder);
    return newOrder;
  }
  return null;
}

export function removeOne(orderId: number) {
  const existed = ordersData.findIndex((order) => order.id === orderId);

  if (existed) {
    ordersData.splice(existed, 1);
  }
  return null;
}

export function updateOne(orderId: number, updatedOrder: Order) {
  const existingOrderIndex = ordersData.findIndex(
    (order) => order.id === orderId
  );

  if (existingOrderIndex === -1) {
    return null;
  }
  // const updated = { ...ordersData[existingOrderIndex], ...updatedOrder };
  // ordersData[existingOrderIndex];
  ordersData[existingOrderIndex] = updatedOrder;
  updatedOrder.id = orderId;

  return updatedOrder;
}
