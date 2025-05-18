import { db, ref, push, update, onValue } from './firebase.js';

class HotelService {
  constructor() {
    this.hotelsRef = ref(db, 'hotels');
    this.bookingsRef = ref(db, 'bookings');
  }
  
  // إضافة فندق جديد
  async addHotel(hotelData) {
    try {
      const newHotelRef = push(this.hotelsRef);
      await update(newHotelRef, {
        ...hotelData,
        id: newHotelRef.key,
        createdAt: new Date().toISOString(),
        status: 'active'
      });
      return newHotelRef.key;
    } catch (error) {
      console.error("Error adding hotel:", error);
      throw error;
    }
  }
  
  // الحصول على جميع الفنادق مع الاستماع للتحديثات
  getHotelsRealTime(callback) {
    const unsubscribe = onValue(this.hotelsRef, (snapshot) => {
      const hotels = [];
      snapshot.forEach((childSnapshot) => {
        hotels.push({
          id: childSnapshot.key,
          ...childSnapshot.val()
        });
      });
      callback(hotels);
    });
    
    return unsubscribe; // لإيقاف الاستماع عند الحاجة
  }
  
  // حجز فندق
  async bookHotel(bookingData) {
    try {
      const newBookingRef = push(this.bookingsRef);
      await update(newBookingRef, {
        ...bookingData,
        id: newBookingRef.key,
        createdAt: new Date().toISOString(),
        status: 'pending'
      });
      return newBookingRef.key;
    } catch (error) {
      console.error("Error booking hotel:", error);
      throw error;
    }
  }
}

export const hotelService = new HotelService();