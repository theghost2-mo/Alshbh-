import { hotelService } from './data.js';

class HotelApp {
  constructor() {
    this.unsubscribeHotels = null;
    this.init();
  }

  async init() {
    this.setupEventListeners();
    this.loadHotels();
  }

  setupEventListeners() {
    // إضافة فندق
    document.getElementById('hotelForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleAddHotel();
    });

    // حجز فندق
    document.getElementById('bookingForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      await this.handleBookHotel();
    });
  }

  loadHotels() {
    this.unsubscribeHotels = hotelService.getHotelsRealTime((hotels) => {
      this.renderHotels(hotels);
    });
  }

  renderHotels(hotels) {
    const hotelsContainer = document.getElementById('hotelsContainer');
    hotelsContainer.innerHTML = '';

    hotels.forEach(hotel => {
      if (hotel.status === 'active') {
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.innerHTML = `
          <div class="hotel-image">
            <img src="${hotel.image || 'default-hotel.jpg'}" alt="${hotel.name}">
          </div>
          <div class="hotel-info">
            <h3>${hotel.name}</h3>
            <p><i class="fas fa-map-marker-alt"></i> ${hotel.city}</p>
            <div class="hotel-rating">
              ${'<i class="fas fa-star"></i>'.repeat(hotel.rating)}
              ${'<i class="far fa-star"></i>'.repeat(5 - hotel.rating)}
              <span>(${hotel.reviews || 0} تقييمات)</span>
            </div>
            <div class="hotel-price">
              <span>${hotel.price} ريال/ليلة</span>
              <button class="btn-book" data-id="${hotel.id}">
                <i class="fas fa-calendar-check"></i> احجز الآن
              </button>
            </div>
          </div>
        `;
        
        hotelsContainer.appendChild(hotelCard);
      }
    });

    // إضافة مستمعي الأحداث لأزرار الحجز
    document.querySelectorAll('.btn-book').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const hotelId = e.target.getAttribute('data-id');
        this.openBookingModal(hotelId);
      });
    });
  }

  async handleAddHotel() {
    const form = document.getElementById('hotelForm');
    const hotelData = {
      name: form.hotelName.value,
      city: form.hotelCity.value,
      rating: parseInt(form.hotelRating.value),
      price: parseInt(form.hotelPrice.value),
      description: form.hotelDescription.value,
      amenities: Array.from(form.querySelectorAll('.amenity-tag')).map(tag => tag.textContent.trim())
    };

    try {
      await hotelService.addHotel(hotelData);
      form.reset();
      document.getElementById('amenitiesTags').innerHTML = '';
      alert('تمت إضافة الفندق بنجاح!');
    } catch (error) {
      alert('حدث خطأ أثناء إضافة الفندق');
    }
  }

  openBookingModal(hotelId) {
    // ... كود فتح نموذج الحجز
  }

  async handleBookHotel() {
    const form = document.getElementById('bookingForm');
    const bookingData = {
      hotelId: form.bookingHotelId.value,
      hotelName: form.bookingHotel.value,
      userName: form.bookingName.value,
      userEmail: form.bookingEmail.value,
      userPhone: form.bookingPhone.value,
      checkin: form.bookingCheckin.value,
      checkout: form.bookingCheckout.value,
      adults: parseInt(form.bookingAdults.value),
      children: parseInt(form.bookingChildren.value),
      notes: form.bookingNotes.value
    };

    try {
      await hotelService.bookHotel(bookingData);
      form.reset();
      alert('تم إرسال طلب الحجز بنجاح!');
    } catch (error) {
      alert('حدث خطأ أثناء إرسال طلب الحجز');
    }
  }
}

// تشغيل التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
  new HotelApp();
});