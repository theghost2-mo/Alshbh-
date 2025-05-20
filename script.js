// بيانات التطبيق
let appData = {
    hotels: [
        {
            id: 1,
            name: "فندق صنعاء جراند",
            city: "صنعاء",
            image: "mo.png?text=صنعاء+جراند",
            rating: 4,
            price: 250,
            reviews: 124,
            amenities: ["واي فاي مجاني", "مسبح", "إفطار مجاني", "موقف سيارات", "صالة رياضية"],
            description: "فندق فاخر في قلب العاصمة صنعاء، يوفر إطلالات رائعة على المدينة وخدمات مميزة لضمان إقامة مريحة.",
            status: "active",
            images: [
                "mo.png?text=صنعاء+جراند+1",
                "mo.png?text=صنعاء+جراند+2",
                "mo.png?text=صنعاء+جراند+3"
            ]
        },
        {
            id: 2,
            name: "فندق مأرب",
            city: "مأرب",
            image: "mo.png?text=فندق+مأرب",
            rating: 3,
            price: 180,
            reviews: 87,
            amenities: ["واي فاي مجاني", "مطعم", "موقف سيارات"],
            description: "فندق مريح في مدينة مأرب التاريخية، قريب من المعالم الأثرية ويوفر خدمات جيدة بأسعار معقولة.",
            status: "active",
            images: [
                "mo.png?text=مأرب+1",
                "mo.png?text=مأرب+2"
            ]
        },
        {
            id: 3,
            name: "منتجع عدن الساحر",
            city: "عدن",
            image: "mo.png?text=منتجع+عدن",
            rating: 5,
            price: 350,
            reviews: 215,
            amenities: ["واي فاي مجاني", "مسبح", "إفطار مجاني", "شاطئ خاص", "سبا", "صالة رياضية"],
            description: "منتجع فاخر على شاطئ البحر في عدن، يوفر إطلالات خلابة على البحر الأحمر وخدمات خمس نجوم.",
            status: "active",
            images: [
                "mo.png?text=عدن+1",
                "mo.png?text=عدن+2",
                "mo.png?text=عدن+3",
                "mo.png?text=عدن+4"
            ]
        },
        {
            id: 4,
            name: "فندق تعز الدولي",
            city: "تعز",
            image: "mo.png?text=تعز+الدولي",
            rating: 4,
            price: 220,
            reviews: 156,
            amenities: ["واي فاي مجاني", "مسبح", "مطعم", "صالة رياضية"],
            description: "فندق حديث في مدينة تعز، يتميز بموقعه الاستراتيجي قرب المراكز التجارية والمناطق السياحية.",
            status: "active",
            images: [
                "mo.png?text=تعز+1",
                "mo.png?text=تعز+2"
            ]
        }
    ],
    bookings: [
        {
            id: 1001,
            hotelId: 1,
            hotelName: "فندق صنعاء جراند",
            userName: "أحمد محمد",
            userEmail: "ahmed@example.com",
            userPhone: "771234567",
            checkin: "2023-10-15",
            checkout: "2023-10-18",
            adults: 2,
            children: 1,
            amount: 750,
            status: "pending",
            date: "2023-10-10"
        },
        {
            id: 1002,
            hotelId: 3,
            hotelName: "منتجع عدن الساحر",
            userName: "سارة علي",
            userEmail: "sara@example.com",
            userPhone: "777654321",
            checkin: "2023-10-12",
            checkout: "2023-10-14",
            adults: 1,
            children: 0,
            amount: 700,
            status: "confirmed",
            date: "2023-10-05"
        }
    ],
    reviews: [
        {
            id: 1,
            hotelId: 1,
            hotelName: "فندق صنعاء جراند",
            userName: "محمد عبدالله",
            rating: 5,
            comment: "إقامة رائعة وخدمات ممتازة، شكراً للطاقم على حسن الاستقبال",
            date: "2023-09-15"
        },
        {
            id: 2,
            hotelId: 3,
            hotelName: "منتجع عدن الساحر",
            userName: "فاطمة أحمد",
            rating: 4,
            comment: "الفندق جميل والموقع ممتاز، ولكن الخدمة تحتاج لبعض التحسين",
            date: "2023-09-10"
        }
    ],
    favorites: [],
    notifications: [
        {
            id: 1,
            title: "حجز جديد",
            message: "تم استلام حجز جديد من أحمد محمد لفندق صنعاء جراند",
            date: "2023-10-10 14:30",
            read: false
        },
        {
            id: 2,
            title: "تأكيد الحجز",
            message: "تم تأكيد حجزك في منتجع عدن الساحر بنجاح",
            date: "2023-10-05 10:15",
            read: true
        }
    ],
    users: [
        {
            id: 1,
            name: "أحمد محمد",
            email: "ahmed@example.com",
            phone: "771234567",
            bookings: [1001]
        },
        {
            id: 2,
            name: "سارة علي",
            email: "sara@example.com",
            phone: "777654321",
            bookings: [1002]
        }
    ],
    messages: []
};

// DOM Elements
const hotelsContainer = document.getElementById('hotelsContainer');
const adminLoginBtn = document.getElementById('adminLoginBtn');
const adminLoginModal = document.getElementById('adminLoginModal');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminPanel = document.getElementById('adminPanel');
const closeModalBtns = document.querySelectorAll('.close, .close-modal');
const bookingModal = document.getElementById('bookingModal');
const bookingForm = document.getElementById('bookingForm');
const paymentModal = document.getElementById('paymentModal');
const confirmPaymentBtn = document.getElementById('confirmPaymentBtn');
const confirmationModal = document.getElementById('confirmationModal');
const adminMenuItems = document.querySelectorAll('.admin-menu li a');
const addHotelBtn = document.getElementById('addHotelBtn');
const hotelFormModal = document.getElementById('hotelFormModal');
const hotelForm = document.getElementById('hotelForm');
const hotelsList = document.getElementById('hotelsList');
const recentBookings = document.getElementById('recentBookings');
const allBookings = document.getElementById('allBookings');
const reviewsList = document.getElementById('reviewsList');
const bookingFilter = document.getElementById('bookingFilter');
const reviewFilter = document.getElementById('reviewFilter');
const sendMessageForm = document.getElementById('sendMessageForm');
const sentMessages = document.getElementById('sentMessages');
const favoritesLink = document.getElementById('favoritesLink');
const favoritesModal = document.getElementById('favoritesModal');
const favoritesList = document.getElementById('favoritesList');
const notificationsLink = document.getElementById('notificationsLink');
const notificationsModal = document.getElementById('notificationsModal');
const notificationsList = document.getElementById('notificationsList');
const searchInput = document.getElementById('searchInput');
const sortBy = document.getElementById('sortBy');
const mobileAdminLoginBtn = document.getElementById('mobileAdminLoginBtn');
const mobileFavoritesLink = document.getElementById('mobileFavoritesLink');
const mobileNotificationsLink = document.getElementById('mobileNotificationsLink');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');

// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    displayHotels();
    updateStats();
    displayRecentBookings();
    displayNotifications();
    
    // تحميل البيانات من localStorage إذا وجدت
    if (localStorage.getItem('hotelAppData')) {
        appData = JSON.parse(localStorage.getItem('hotelAppData'));
    }
    
    // تحديث عدد الإشعارات غير المقروءة
    updateNotificationBadge();
});

// عرض الفنادق في الصفحة الرئيسية
function displayHotels() {
    hotelsContainer.innerHTML = '';
    
    // ترتيب الفنادق حسب الاختيار
    let sortedHotels = [...appData.hotels];
    switch (sortBy.value) {
        case 'price-low':
            sortedHotels.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedHotels.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            sortedHotels.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // موصى به (الافتراضي)
            break;
    }
    
    sortedHotels.forEach(hotel => {
        if (hotel.status === 'active') {
            const isFavorite = appData.favorites.some(fav => fav.id === hotel.id);
            
            const hotelCard = document.createElement('div');
            hotelCard.className = 'hotel-card';
            hotelCard.innerHTML = `
                <div class="hotel-image">
                    <img src="${hotel.image}" alt="${hotel.name}">
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${hotel.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
                <div class="hotel-info">
                    <h3 class="hotel-name">${hotel.name}</h3>
                    <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.city}</p>
                    <div class="hotel-rating">
                        <div class="stars">
                            ${'<i class="fas fa-star"></i>'.repeat(hotel.rating)}
                            ${'<i class="far fa-star"></i>'.repeat(5 - hotel.rating)}
                        </div>
                        <span class="reviews">(${hotel.reviews} تقييم)</span>
                    </div>
                    <div class="hotel-price">
                        <div class="price">${hotel.price} <span>ريال/ليلة</span></div>
                        <button class="btn-book" data-id="${hotel.id}">
                            <i class="fas fa-calendar-check"></i> احجز الآن
                        </button>
                    </div>
                </div>
            `;
            
            hotelsContainer.appendChild(hotelCard);
        }
    });
    
    // إضافة مستمعي الأحداث لأزرار الحجز والمفضلة
    document.querySelectorAll('.btn-book').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            openBookingModal(hotelId);
        });
    });
    
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            toggleFavorite(hotelId);
        });
    });
}

// فتح نموذج حجز الفندق
function openBookingModal(hotelId) {
    const hotel = appData.hotels.find(h => h.id === hotelId);
    
    if (hotel) {
        document.getElementById('bookingHotelId').value = hotel.id;
        document.getElementById('bookingHotel').value = hotel.name;
        document.getElementById('summaryPrice').textContent = `${hotel.price} ريال`;
        
        // حساب التواريخ الافتراضية (اليوم وغداً)
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);
        
        const todayStr = today.toISOString().split('T')[0];
        const tomorrowStr = tomorrow.toISOString().split('T')[0];
        
        document.getElementById('bookingCheckin').value = todayStr;
        document.getElementById('bookingCheckout').value = tomorrowStr;
        document.getElementById('bookingCheckin').min = todayStr;
        document.getElementById('bookingCheckout').min = tomorrowStr;
        
        // تحديث ملخص الحجز عند تغيير التواريخ
        document.getElementById('bookingCheckin').addEventListener('change', updateBookingSummary);
        document.getElementById('bookingCheckout').addEventListener('change', updateBookingSummary);
        
        updateBookingSummary();
        
        bookingModal.style.display = 'block';
    }
}

// تحديث ملخص الحجز
function updateBookingSummary() {
    const checkin = new Date(document.getElementById('bookingCheckin').value);
    const checkout = new Date(document.getElementById('bookingCheckout').value);
    const hotelId = parseInt(document.getElementById('bookingHotelId').value);
    const hotel = appData.hotels.find(h => h.id === hotelId);
    
    if (checkin && checkout && checkout > checkin && hotel) {
        const nights = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24));
        const total = nights * hotel.price;
        
        document.getElementById('summaryNights').textContent = nights;
        document.getElementById('summaryTotal').textContent = `${total} ريال`;
        document.getElementById('paymentAmount').textContent = `${total} ريال سعودي`;
        document.getElementById('bankAmount').textContent = `${total} ريال`;
    }
}

// إضافة/إزالة فندق من المفضلة
function toggleFavorite(hotelId) {
    const hotel = appData.hotels.find(h => h.id === hotelId);
    const favoriteIndex = appData.favorites.findIndex(fav => fav.id === hotelId);
    
    if (favoriteIndex === -1) {
        // إضافة إلى المفضلة
        appData.favorites.push({
            id: hotel.id,
            name: hotel.name,
            city: hotel.city,
            image: hotel.image,
            price: hotel.price
        });
    } else {
        // إزالة من المفضلة
        appData.favorites.splice(favoriteIndex, 1);
    }
    
    // حفظ البيانات وتحديث الواجهة
    saveData();
    displayHotels();
    displayFavorites();
    
    // إظهار رسالة تأكيد
    const message = favoriteIndex === -1 ? 'تمت إضافة الفندق إلى المفضلة' : 'تمت إزالة الفندق من المفضلة';
    showNotification('المفضلة', message);
}

// عرض الفنادق المفضلة
function displayFavorites() {
    favoritesList.innerHTML = '';
    
    if (appData.favorites.length === 0) {
        favoritesList.innerHTML = '<p class="no-favorites">لا توجد فنادق في المفضلة</p>';
        return;
    }
    
    appData.favorites.forEach(hotel => {
        const favoriteCard = document.createElement('div');
        favoriteCard.className = 'favorite-card';
        favoriteCard.innerHTML = `
            <img src="${hotel.image}" alt="${hotel.name}">
            <div class="favorite-info">
                <h4 class="favorite-name">${hotel.name}</h4>
                <p class="favorite-location"><i class="fas fa-map-marker-alt"></i> ${hotel.city}</p>
                <div class="favorite-price">${hotel.price} ريال/ليلة</div>
                <div class="favorite-actions">
                    <button class="btn-book" data-id="${hotel.id}">
                        <i class="fas fa-calendar-check"></i> احجز الآن
                    </button>
                    <button class="remove-favorite" data-id="${hotel.id}">
                        <i class="fas fa-trash"></i> إزالة
                    </button>
                </div>
            </div>
        `;
        
        favoritesList.appendChild(favoriteCard);
    });
    
    // إضافة مستمعي الأحداث للأزرار
    document.querySelectorAll('.favorite-card .btn-book').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            openBookingModal(hotelId);
            favoritesModal.style.display = 'none';
        });
    });
    
    document.querySelectorAll('.remove-favorite').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            toggleFavorite(hotelId);
        });
    });
}

// عرض الإشعارات
function displayNotifications() {
    notificationsList.innerHTML = '';
    
    if (appData.notifications.length === 0) {
        notificationsList.innerHTML = '<p class="no-notifications">لا توجد إشعارات</p>';
        return;
    }
    
    appData.notifications.forEach(notification => {
        const notificationItem = document.createElement('div');
        notificationItem.className = `notification-item ${notification.read ? '' : 'unread'}`;
        notificationItem.innerHTML = `
            <div class="notification-icon">
                <i class="fas fa-bell"></i>
            </div>
            <div class="notification-content">
                <h4 class="notification-title">${notification.title}</h4>
                <p class="notification-message">${notification.message}</p>
                <small class="notification-date">${notification.date}</small>
            </div>
        `;
        
        notificationItem.addEventListener('click', function() {
            if (!notification.read) {
                notification.read = true;
                saveData();
                updateNotificationBadge();
                this.classList.remove('unread');
            }
        });
        
        notificationsList.appendChild(notificationItem);
    });
}

// تحديث عدد الإشعارات غير المقروءة
function updateNotificationBadge() {
    const unreadCount = appData.notifications.filter(n => !n.read).length;
    const badges = document.querySelectorAll('.notification-badge');
    
    badges.forEach(badge => {
        if (unreadCount > 0) {
            badge.textContent = unreadCount;
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    });
}

// عرض الفنادق في لوحة التحكم
function displayAdminHotels() {
    hotelsList.innerHTML = '';
    
    appData.hotels.forEach(hotel => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${hotel.image}" alt="${hotel.name}" width="50" height="50" style="object-fit: cover; border-radius: 5px;"></td>
            <td>${hotel.name}</td>
            <td>${hotel.city}</td>
            <td>${'★'.repeat(hotel.rating)}${'☆'.repeat(5 - hotel.rating)}</td>
            <td>${hotel.price} ريال</td>
            <td><span class="status ${hotel.status === 'active' ? 'confirmed' : 'cancelled'}">${hotel.status === 'active' ? 'نشط' : 'غير نشط'}</span></td>
            <td>
                <button class="btn-action btn-edit" data-id="${hotel.id}">
                    <i class="fas fa-edit"></i> تعديل
                </button>
                <button class="btn-action btn-delete" data-id="${hotel.id}">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        `;
        
        hotelsList.appendChild(row);
    });
    
    // إضافة مستمعي الأحداث لأزرار التعديل والحذف
    document.querySelectorAll('.btn-edit').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            editHotel(hotelId);
        });
    });
    
    document.querySelectorAll('.btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            deleteHotel(hotelId);
        });
    });
}

// تحرير فندق
function editHotel(hotelId) {
    const hotel = appData.hotels.find(h => h.id === hotelId);
    
    if (hotel) {
        document.getElementById('hotelFormTitle').textContent = 'تعديل الفندق';
        document.getElementById('hotelId').value = hotel.id;
        document.getElementById('hotelName').value = hotel.name;
        document.getElementById('hotelCity').value = hotel.city;
        document.getElementById('hotelRating').value = hotel.rating;
        document.getElementById('hotelPrice').value = hotel.price;
        document.getElementById('hotelDescription').value = hotel.description;
        document.getElementById('hotelStatus').value = hotel.status;
        
        // عرض وسائل الراحة
        const amenitiesTags = document.getElementById('amenitiesTags');
        amenitiesTags.innerHTML = '';
        hotel.amenities.forEach(amenity => {
            const tag = document.createElement('div');
            tag.className = 'amenity-tag';
            tag.innerHTML = `
                ${amenity}
                <button type="button" class="remove-amenity" data-amenity="${amenity}">
                    <i class="fas fa-times"></i>
                </button>
            `;
            amenitiesTags.appendChild(tag);
        });
        
        // عرض الصور
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.innerHTML = '';
        hotel.images.forEach(image => {
            const preview = document.createElement('div');
            preview.className = 'preview-image';
            preview.innerHTML = `
                <img src="${image}" alt="صورة الفندق">
                <button class="remove-image">
                    <i class="fas fa-times"></i>
                </button>
            `;
            imagePreview.appendChild(preview);
        });
        
        hotelFormModal.style.display = 'block';
    }
}

// حذف فندق
function deleteHotel(hotelId) {
    if (confirm('هل أنت متأكد من حذف هذا الفندق؟ لا يمكن التراجع عن هذا الإجراء.')) {
        const index = appData.hotels.findIndex(h => h.id === hotelId);
        if (index !== -1) {
            appData.hotels.splice(index, 1);
            saveData();
            displayAdminHotels();
            displayHotels();
            showNotification('إدارة الفنادق', 'تم حذف الفندق بنجاح');
        }
    }
}

// عرض الحجوزات الأخيرة في لوحة التحكم
function displayRecentBookings() {
    recentBookings.innerHTML = '';
    
    // عرض آخر 5 حجوزات
    const recent = [...appData.bookings].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
    
    recent.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${booking.id}</td>
            <td>${booking.hotelName}</td>
            <td>${booking.userName}</td>
            <td>${formatDate(booking.checkin)} - ${formatDate(booking.checkout)}</td>
            <td><span class="status ${booking.status}">${getStatusText(booking.status)}</span></td>
            <td>
                <button class="btn-action btn-view" data-id="${booking.id}">
                    <i class="fas fa-eye"></i> عرض
                </button>
                ${booking.status === 'pending' ? `
                <button class="btn-action btn-approve" data-id="${booking.id}">
                    <i class="fas fa-check"></i> قبول
                </button>
                <button class="btn-action btn-reject" data-id="${booking.id}">
                    <i class="fas fa-times"></i> رفض
                </button>
                ` : ''}
            </td>
        `;
        
        recentBookings.appendChild(row);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحجوزات
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.getAttribute('data-id'));
            viewBookingDetails(bookingId);
        });
    });
    
    document.querySelectorAll('.btn-approve').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.getAttribute('data-id'));
            updateBookingStatus(bookingId, 'confirmed');
        });
    });
    
    document.querySelectorAll('.btn-reject').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.getAttribute('data-id'));
            updateBookingStatus(bookingId, 'cancelled');
        });
    });
}

// عرض جميع الحجوزات في لوحة التحكم
function displayAllBookings() {
    allBookings.innerHTML = '';
    
    // فلترة الحجوزات حسب الاختيار
    let filteredBookings = [...appData.bookings];
    if (bookingFilter.value !== 'all') {
        filteredBookings = filteredBookings.filter(b => b.status === bookingFilter.value);
    }
    
    // ترتيب الحجوزات من الأحدث إلى الأقدم
    filteredBookings.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    filteredBookings.forEach(booking => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>#${booking.id}</td>
            <td>${booking.hotelName}</td>
            <td>${booking.userName}</td>
            <td>${formatDate(booking.checkin)} - ${formatDate(booking.checkout)}</td>
            <td>${booking.amount} ريال</td>
            <td><span class="status ${booking.status}">${getStatusText(booking.status)}</span></td>
            <td>
                <button class="btn-action btn-view" data-id="${booking.id}">
                    <i class="fas fa-eye"></i> عرض
                </button>
                ${booking.status === 'pending' ? `
                <button class="btn-action btn-approve" data-id="${booking.id}">
                    <i class="fas fa-check"></i> قبول
                </button>
                <button class="btn-action btn-reject" data-id="${booking.id}">
                    <i class="fas fa-times"></i> رفض
                </button>
                ` : ''}
            </td>
        `;
        
        allBookings.appendChild(row);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحجوزات
    document.querySelectorAll('#allBookings .btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.getAttribute('data-id'));
            viewBookingDetails(bookingId);
        });
    });
    
    document.querySelectorAll('#allBookings .btn-approve').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.getAttribute('data-id'));
            updateBookingStatus(bookingId, 'confirmed');
        });
    });
    
    document.querySelectorAll('#allBookings .btn-reject').forEach(btn => {
        btn.addEventListener('click', function() {
            const bookingId = parseInt(this.getAttribute('data-id'));
            updateBookingStatus(bookingId, 'cancelled');
        });
    });
}

// عرض تفاصيل الحجز
function viewBookingDetails(bookingId) {
    const booking = appData.bookings.find(b => b.id === bookingId);
    
    if (booking) {
        document.getElementById('bookingNumber').textContent = `#${booking.id}`;
        document.getElementById('detailHotel').textContent = booking.hotelName;
        document.getElementById('detailUser').textContent = `${booking.userName} (${booking.userEmail} - ${booking.userPhone})`;
        document.getElementById('detailCheckin').textContent = formatDate(booking.checkin, true);
        document.getElementById('detailCheckout').textContent = formatDate(booking.checkout, true);
        document.getElementById('detailGuests').textContent = `${booking.adults} بالغين، ${booking.children} أطفال`;
        document.getElementById('detailAmount').textContent = `${booking.amount} ريال سعودي`;
        document.getElementById('detailStatus').textContent = getStatusText(booking.status);
        document.getElementById('detailDate').textContent = formatDate(booking.date, true);
        
        // أزرار الإجراءات حسب حالة الحجز
        const bookingActions = document.getElementById('bookingActions');
        bookingActions.innerHTML = '';
        
        if (booking.status === 'pending') {
            bookingActions.innerHTML = `
                <button class="btn-submit btn-approve" data-id="${booking.id}">
                    <i class="fas fa-check"></i> قبول الحجز
                </button>
                <button class="btn-cancel btn-reject" data-id="${booking.id}">
                    <i class="fas fa-times"></i> رفض الحجز
                </button>
            `;
        } else if (booking.status === 'confirmed') {
            bookingActions.innerHTML = `
                <button class="btn-cancel btn-reject" data-id="${booking.id}">
                    <i class="fas fa-times"></i> إلغاء الحجز
                </button>
            `;
        } else {
            bookingActions.innerHTML = `
                <button class="btn-submit" disabled>
                    <i class="fas fa-info-circle"></i> لا يوجد إجراء متاح
                </button>
            `;
        }
        
        // إضافة مستمعي الأحداث لأزرار الإجراءات
        document.querySelectorAll('#bookingActions .btn-approve').forEach(btn => {
            btn.addEventListener('click', function() {
                updateBookingStatus(bookingId, 'confirmed');
                document.getElementById('bookingDetailsModal').style.display = 'none';
            });
        });
        
        document.querySelectorAll('#bookingActions .btn-reject').forEach(btn => {
            btn.addEventListener('click', function() {
                updateBookingStatus(bookingId, 'cancelled');
                document.getElementById('bookingDetailsModal').style.display = 'none';
            });
        });
        
        document.getElementById('bookingDetailsModal').style.display = 'block';
    }
}

// تحديث حالة الحجز
function updateBookingStatus(bookingId, status) {
    const booking = appData.bookings.find(b => b.id === bookingId);
    
    if (booking) {
        booking.status = status;
        saveData();
        displayRecentBookings();
        displayAllBookings();
        
        // إرسال إشعار للمستخدم
        const notification = {
            id: Date.now(),
            title: status === 'confirmed' ? 'تأكيد الحجز' : status === 'cancelled' ? 'إلغاء الحجز' : 'تحديث الحجز',
            message: status === 'confirmed' 
                ? `تم تأكيد حجزك في ${booking.hotelName} للفترة من ${formatDate(booking.checkin)} إلى ${formatDate(booking.checkout)}`
                : `تم ${status === 'cancelled' ? 'إلغاء' : 'تحديث'} حجزك في ${booking.hotelName}`,
            date: new Date().toLocaleString(),
            read: false
        };
        
        appData.notifications.unshift(notification);
        saveData();
        updateNotificationBadge();
        displayNotifications();
        
        showNotification('إدارة الحجوزات', `تم ${getStatusText(status)} الحجز بنجاح`);
    }
}

// عرض التقييمات في لوحة التحكم
function displayReviews() {
    reviewsList.innerHTML = '';
    
    // فلترة التقييمات حسب الاختيار
    let filteredReviews = [...appData.reviews];
    if (reviewFilter.value !== 'all') {
        filteredReviews = filteredReviews.filter(r => r.rating === parseInt(reviewFilter.value));
    }
    
    // ترتيب التقييمات من الأحدث إلى الأقدم
    filteredReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    filteredReviews.forEach(review => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${review.hotelName}</td>
            <td>${review.userName}</td>
            <td>${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</td>
            <td>${review.comment}</td>
            <td>${formatDate(review.date)}</td>
            <td>
                <button class="btn-action btn-delete" data-id="${review.id}">
                    <i class="fas fa-trash"></i> حذف
                </button>
            </td>
        `;
        
        reviewsList.appendChild(row);
    });
    
    // إضافة مستمعي الأحداث لأزرار الحذف
    document.querySelectorAll('#reviewsList .btn-delete').forEach(btn => {
        btn.addEventListener('click', function() {
            const reviewId = parseInt(this.getAttribute('data-id'));
            deleteReview(reviewId);
        });
    });
}

// حذف تقييم
function deleteReview(reviewId) {
    if (confirm('هل أنت متأكد من حذف هذا التقييم؟ لا يمكن التراجع عن هذا الإجراء.')) {
        const index = appData.reviews.findIndex(r => r.id === reviewId);
        if (index !== -1) {
            appData.reviews.splice(index, 1);
            saveData();
            displayReviews();
            showNotification('إدارة التقييمات', 'تم حذف التقييم بنجاح');
        }
    }
}

// عرض الرسائل المرسلة
function displaySentMessages() {
    sentMessages.innerHTML = '';
    
    if (appData.messages.length === 0) {
        sentMessages.innerHTML = '<p class="no-messages">لا توجد رسائل مرسلة</p>';
        return;
    }
    
    appData.messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';
        messageItem.innerHTML = `
            <div class="message-header">
                <span class="message-title">${message.subject}</span>
                <span class="message-date">${formatDate(message.date, true)}</span>
            </div>
            <div class="message-content">${message.content}</div>
            <div class="message-recipient"><small>إلى: ${message.recipient === 'all' ? 'جميع المستخدمين' : 'مستخدمين بحجوزات'}</small></div>
        `;
        
        sentMessages.appendChild(messageItem);
    });
}

// إرسال رسالة للمستخدمين
function sendMessageToUsers(recipient, subject, content) {
    const message = {
        id: Date.now(),
        recipient,
        subject,
        content,
        date: new Date().toLocaleString()
    };
    
    appData.messages.unshift(message);
    
    // إضافة إشعارات للمستخدمين
    let usersToNotify = [];
    
    if (recipient === 'all') {
        usersToNotify = appData.users;
    } else if (recipient === 'with-bookings') {
        usersToNotify = appData.users.filter(user => user.bookings && user.bookings.length > 0);
    }
    
    usersToNotify.forEach(user => {
        const notification = {
            id: Date.now(),
            title: 'رسالة جديدة',
            message: subject,
            date: new Date().toLocaleString(),
            read: false
        };
        
        appData.notifications.unshift(notification);
    });
    
    saveData();
    displaySentMessages();
    updateNotificationBadge();
    displayNotifications();
    
    showNotification('الرسائل', 'تم إرسال الرسالة بنجاح');
}

// تحديث الإحصائيات في لوحة التحكم
function updateStats() {
    document.getElementById('totalHotels').textContent = appData.hotels.length;
    document.getElementById('totalBookings').textContent = appData.bookings.length;
    document.getElementById('totalReviews').textContent = appData.reviews.length;
    document.getElementById('totalUsers').textContent = appData.users.length;
    
    // تحديث الرسم البياني للحجوزات
    updateBookingsChart();
}

// تحديث الرسم البياني للحجوزات
function updateBookingsChart() {
    const ctx = document.getElementById('bookingsChart').getContext('2d');
    
    const pendingCount = appData.bookings.filter(b => b.status === 'pending').length;
    const confirmedCount = appData.bookings.filter(b => b.status === 'confirmed').length;
    const cancelledCount = appData.bookings.filter(b => b.status === 'cancelled').length;
    
    if (window.bookingsChart) {
        window.bookingsChart.destroy();
    }
    
    window.bookingsChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['قيد الانتظار', 'مؤكدة', 'ملغاة'],
            datasets: [{
                data: [pendingCount, confirmedCount, cancelledCount],
                backgroundColor: [
                    '#fff3cd',
                    '#d4edda',
                    '#f8d7da'
                ],
                borderColor: [
                    '#ffecb5',
                    '#c3e6cb',
                    '#f5c6cb'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    rtl: true
                }
            }
        }
    });
}

// حفظ البيانات في localStorage
function saveData() {
    localStorage.setItem('hotelAppData', JSON.stringify(appData));
}

// تنسيق التاريخ
function formatDate(dateString, withTime = false) {
    const date = new Date(dateString);
    if (withTime) {
        return date.toLocaleString('ar-EG');
    }
    return date.toLocaleDateString('ar-EG');
}

// الحصول على نص حالة الحجز
function getStatusText(status) {
    switch (status) {
        case 'pending': return 'قيد الانتظار';
        case 'confirmed': return 'مؤكد';
        case 'cancelled': return 'ملغي';
        default: return status;
    }
}

// عرض إشعار للادمن
function showNotification(title, message) {
    const notification = document.createElement('div');
    notification.className = 'notification-toast animate__animated animate__fadeInRight';
    notification.innerHTML = `
        <div class="notification-icon">
            <i class="fas fa-bell"></i>
        </div>
        <div class="notification-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
        <button class="close-notification">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    document.body.appendChild(notification);
    
    // إغلاق الإشعار بعد 5 ثواني
    setTimeout(() => {
        notification.classList.remove('animate__fadeInRight');
        notification.classList.add('animate__fadeOutRight');
        setTimeout(() => {
            notification.remove();
        }, 500);
    }, 5000);
    
    // إغلاق الإشعار عند النقر على الزر
    notification.querySelector('.close-notification').addEventListener('click', function() {
        notification.classList.remove('animate__fadeInRight');
        notification.classList.add('animate__fadeOutRight');
        setTimeout(() => {
            notification.remove();
        }, 500);
    });
}

// أحداث DOM
adminLoginBtn.addEventListener('click', function() {
    adminLoginModal.style.display = 'block';
});

mobileAdminLoginBtn.addEventListener('click', function() {
    adminLoginModal.style.display = 'block';
    mobileMenu.classList.remove('active');
});

closeModalBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
    });
});

// تسجيل دخول المدير
adminLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('adminPassword').value;
    
    // كلمة المرور الصحيحة هي "01278006248" كما طلبت
    if (password === "01278006248") {
        adminLoginModal.style.display = 'none';
        openAdminPanel();
    } else {
        alert('كلمة المرور غير صحيحة!');
    }
});

// فتح لوحة التحكم
function openAdminPanel() {
    adminPanel.style.display = 'block';
    displayAdminHotels();
    updateStats();
    displayRecentBookings();
    displayAllBookings();
    displayReviews();
    displaySentMessages();
}

// التنقل في لوحة التحكم
adminMenuItems.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        
        // إزالة التنشيط من جميع العناصر
        adminMenuItems.forEach(i => {
            i.parentElement.classList.remove('active');
        });
        
        // تنشيط العنصر الحالي
        this.parentElement.classList.add('active');
        
        // إخفاء جميع الأقسام
        document.querySelectorAll('.admin-main > div').forEach(section => {
            section.style.display = 'none';
        });
        
        // عرض القسم المحدد
        switch (sectionId) {
            case '#dashboard':
                document.querySelector('.dashboard-content').style.display = 'block';
                document.getElementById('adminPageTitle').textContent = 'لوحة التحكم';
                break;
            case '#hotels':
                document.querySelector('.hotels-management').style.display = 'block';
                document.getElementById('adminPageTitle').textContent = 'إدارة الفنادق';
                break;
            case '#bookings':
                document.querySelector('.bookings-management').style.display = 'block';
                document.getElementById('adminPageTitle').textContent = 'إدارة الحجوزات';
                break;
            case '#reviews':
                document.querySelector('.reviews-management').style.display = 'block';
                document.getElementById('adminPageTitle').textContent = 'إدارة التقييمات';
                break;
            case '#messages':
                document.querySelector('.messages-management').style.display = 'block';
                document.getElementById('adminPageTitle').textContent = 'الرسائل';
                break;
            case '#settings':
                // يمكنك إضافة قسم الإعدادات هنا
                break;
            case '#logout':
                if (confirm('هل تريد تسجيل الخروج؟')) {
                    adminPanel.style.display = 'none';
                }
                break;
        }
    });
});

// إضافة فندق جديد
addHotelBtn.addEventListener('click', function() {
    document.getElementById('hotelFormTitle').textContent = 'إضافة فندق جديد';
    hotelForm.reset();
    document.getElementById('amenitiesTags').innerHTML = '';
    document.getElementById('imagePreview').innerHTML = '';
    document.getElementById('hotelId').value = '';
    document.getElementById('hotelStatus').value = 'active';
    hotelFormModal.style.display = 'block';
});

// إضافة وسيلة راحة
document.getElementById('addAmenityBtn').addEventListener('click', function() {
    const amenityInput = document.getElementById('amenityInput');
    const amenity = amenityInput.value.trim();
    
    if (amenity) {
        const amenitiesTags = document.getElementById('amenitiesTags');
        const tag = document.createElement('div');
        tag.className = 'amenity-tag';
        tag.innerHTML = `
            ${amenity}
            <button type="button" class="remove-amenity" data-amenity="${amenity}">
                <i class="fas fa-times"></i>
            </button>
        `;
        amenitiesTags.appendChild(tag);
        amenityInput.value = '';
        
        // إضافة حدث لإزالة الوسيلة
        tag.querySelector('.remove-amenity').addEventListener('click', function() {
            tag.remove();
        });
    }
});

// معالجة إرسال نموذج الفندق
hotelForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const id = document.getElementById('hotelId').value;
    const name = document.getElementById('hotelName').value;
    const city = document.getElementById('hotelCity').value;
    const rating = parseInt(document.getElementById('hotelRating').value);
    const price = parseInt(document.getElementById('hotelPrice').value);
    const description = document.getElementById('hotelDescription').value;
    const status = document.getElementById('hotelStatus').value;
    
    // جمع وسائل الراحة
    const amenities = [];
    document.querySelectorAll('.amenity-tag').forEach(tag => {
        amenities.push(tag.textContent.trim());
    });
    
    // جمع الصور (في تطبيق حقيقي، سيتم رفع الصور إلى الخادم)
    const images = [];
    document.querySelectorAll('.preview-image img').forEach(img => {
        images.push(img.src);
    });
    
    if (id) {
        // تعديل فندق موجود
        const index = appData.hotels.findIndex(h => h.id === parseInt(id));
        if (index !== -1) {
            appData.hotels[index] = {
                ...appData.hotels[index],
                name,
                city,
                rating,
                price,
                description,
                amenities,
                status,
                images: images.length > 0 ? images : appData.hotels[index].images
            };
            
            showNotification('إدارة الفنادق', 'تم تحديث الفندق بنجاح');
        }
    } else {
        // إضافة فندق جديد
        const newHotel = {
            id: appData.hotels.length > 0 ? Math.max(...appData.hotels.map(h => h.id)) + 1 : 1,
            name,
            city,
            image: images.length > 0 ? images[0] : 'mo.png?text=فندق+جديد',
            rating,
            price,
            reviews: 0,
            amenities,
            description,
            status,
            images
        };
        
        appData.hotels.unshift(newHotel);
        showNotification('إدارة الفنادق', 'تم إضافة الفندق بنجاح');
    }
    
    saveData();
    displayAdminHotels();
    displayHotels();
    hotelFormModal.style.display = 'none';
});

// معالجة تحميل الصور
document.getElementById('hotelImages').addEventListener('change', function(e) {
    const files = e.target.files;
    const imagePreview = document.getElementById('imagePreview');
    
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const preview = document.createElement('div');
            preview.className = 'preview-image';
            preview.innerHTML = `
                <img src="${e.target.result}" alt="صورة الفندق">
                <button class="remove-image">
                    <i class="fas fa-times"></i>
                </button>
            `;
            imagePreview.appendChild(preview);
            
            // إضافة حدث لإزالة الصورة
            preview.querySelector('.remove-image').addEventListener('click', function() {
                preview.remove();
            });
        };
        
        reader.readAsDataURL(file);
    }
});

// معالجة إرسال نموذج الحجز
bookingForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const hotelId = parseInt(document.getElementById('bookingHotelId').value);
    const hotel = appData.hotels.find(h => h.id === hotelId);
    
    if (hotel) {
        bookingModal.style.display = 'none';
        paymentModal.style.display = 'block';
    }
});

// تأكيد الدفع
confirmPaymentBtn.addEventListener('click', function() {
    const hotelId = parseInt(document.getElementById('bookingHotelId').value);
    const hotel = appData.hotels.find(h => h.id === hotelId);
    
    if (hotel) {
        const checkin = document.getElementById('bookingCheckin').value;
        const checkout = document.getElementById('bookingCheckout').value;
        const nights = Math.ceil((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24));
        const amount = nights * hotel.price;
        
        const newBooking = {
            id: appData.bookings.length > 0 ? Math.max(...appData.bookings.map(b => b.id)) + 1 : 1001,
            hotelId: hotel.id,
            hotelName: hotel.name,
            userName: document.getElementById('bookingName').value,
            userEmail: document.getElementById('bookingEmail').value,
            userPhone: document.getElementById('bookingPhone').value,
            checkin,
            checkout,
            adults: parseInt(document.getElementById('bookingAdults').value),
            children: parseInt(document.getElementById('bookingChildren').value),
            amount,
            status: 'pending',
            date: new Date().toISOString().split('T')[0]
        };
        
        appData.bookings.unshift(newBooking);
        
        // إضافة مستخدم جديد إذا لم يكن موجوداً
        const userExists = appData.users.some(u => u.email === newBooking.userEmail);
        if (!userExists) {
            const newUser = {
                id: appData.users.length > 0 ? Math.max(...appData.users.map(u => u.id)) + 1 : 1,
                name: newBooking.userName,
                email: newBooking.userEmail,
                phone: newBooking.userPhone,
                bookings: [newBooking.id]
            };
            
            appData.users.push(newUser);
        } else {
            // تحديث المستخدم الموجود
            const userIndex = appData.users.findIndex(u => u.email === newBooking.userEmail);
            if (userIndex !== -1) {
                appData.users[userIndex].bookings.push(newBooking.id);
            }
        }
        
        // إرسال إشعار للمدير
        const adminNotification = {
            id: Date.now(),
            title: 'حجز جديد',
            message: `تم استلام حجز جديد من ${newBooking.userName} لفندق ${hotel.name}`,
            date: new Date().toLocaleString(),
            read: false
        };
        
        appData.notifications.unshift(adminNotification);
        
        saveData();
        updateStats();
        displayRecentBookings();
        displayAllBookings();
        updateNotificationBadge();
        displayNotifications();
        
        paymentModal.style.display = 'none';
        
        // عرض تأكيد الحجز
        document.getElementById('confirmationNumber').textContent = `#${newBooking.id}`;
        document.getElementById('confirmationHotel').textContent = hotel.name;
        document.getElementById('confirmationDates').textContent = `${formatDate(checkin, true)} - ${formatDate(checkout, true)}`;
        document.getElementById('confirmationAmount').textContent = `${amount} ريال سعودي`;
        
        confirmationModal.style.display = 'block';
    }
});

// العودة إلى الصفحة الرئيسية بعد الحجز
document.querySelector('.btn-confirmation').addEventListener('click', function() {
    confirmationModal.style.display = 'none';
});

// فلترة الحجوزات
bookingFilter.addEventListener('change', function() {
    displayAllBookings();
});

// فلترة التقييمات
reviewFilter.addEventListener('change', function() {
    displayReviews();
});

// إرسال رسالة للمستخدمين
sendMessageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const recipient = document.getElementById('messageRecipient').value;
    const subject = document.getElementById('messageSubject').value;
    const content = document.getElementById('messageContent').value;
    
    if (subject && content) {
        sendMessageToUsers(recipient, subject, content);
        this.reset();
    }
});

// عرض صفحة المفضلة
favoritesLink.addEventListener('click', function(e) {
    e.preventDefault();
    displayFavorites();
    favoritesModal.style.display = 'block';
});

mobileFavoritesLink.addEventListener('click', function(e) {
    e.preventDefault();
    displayFavorites();
    favoritesModal.style.display = 'block';
    mobileMenu.classList.remove('active');
});

// عرض صفحة الإشعارات
notificationsLink.addEventListener('click', function(e) {
    e.preventDefault();
    displayNotifications();
    notificationsModal.style.display = 'block';
});

mobileNotificationsLink.addEventListener('click', function(e) {
    e.preventDefault();
    displayNotifications();
    notificationsModal.style.display = 'block';
    mobileMenu.classList.remove('active');
});

// البحث عن الفنادق
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    if (searchTerm.length > 0) {
        const filteredHotels = appData.hotels.filter(hotel => 
            hotel.name.toLowerCase().includes(searchTerm) || 
            hotel.city.toLowerCase().includes(searchTerm)
        );
        
        displayFilteredHotels(filteredHotels);
    } else {
        displayHotels();
    }
});

// عرض الفنادق المفلترة
function displayFilteredHotels(hotels) {
    hotelsContainer.innerHTML = '';
    
    if (hotels.length === 0) {
        hotelsContainer.innerHTML = '<p class="no-results">لا توجد نتائج مطابقة للبحث</p>';
        return;
    }
    
    hotels.forEach(hotel => {
        const isFavorite = appData.favorites.some(fav => fav.id === hotel.id);
        
        const hotelCard = document.createElement('div');
        hotelCard.className = 'hotel-card';
        hotelCard.innerHTML = `
            <div class="hotel-image">
                <img src="${hotel.image}" alt="${hotel.name}">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-id="${hotel.id}">
                    <i class="fas fa-heart"></i>
                </button>
            </div>
            <div class="hotel-info">
                <h3 class="hotel-name">${hotel.name}</h3>
                <p class="hotel-location"><i class="fas fa-map-marker-alt"></i> ${hotel.city}</p>
                <div class="hotel-rating">
                    <div class="stars">
                        ${'<i class="fas fa-star"></i>'.repeat(hotel.rating)}
                        ${'<i class="far fa-star"></i>'.repeat(5 - hotel.rating)}
                    </div>
                    <span class="reviews">(${hotel.reviews} تقييم)</span>
                </div>
                <div class="hotel-price">
                    <div class="price">${hotel.price} <span>ريال/ليلة</span></div>
                    <button class="btn-book" data-id="${hotel.id}">
                        <i class="fas fa-calendar-check"></i> احجز الآن
                    </button>
                </div>
            </div>
        `;
        
        hotelsContainer.appendChild(hotelCard);
    });
    
    // إضافة مستمعي الأحداث للأزرار
    document.querySelectorAll('.btn-book').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            openBookingModal(hotelId);
        });
    });
    
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const hotelId = parseInt(this.getAttribute('data-id'));
            toggleFavorite(hotelId);
        });
    });
}

// تغيير طريقة الدفع
document.querySelectorAll('.method-card').forEach(card => {
    card.addEventListener('click', function() {
        document.querySelectorAll('.method-card').forEach(c => {
            c.classList.remove('active');
        });
        
        this.classList.add('active');
        
        document.querySelectorAll('.payment-form').forEach(form => {
            form.style.display = 'none';
        });
        
        const method = this.getAttribute('data-method');
        document.getElementById(`${method}PaymentForm`).style.display = 'block';
    });
});

// ترتيب الفنادق
sortBy.addEventListener('change', function() {
    displayHotels();
});

// قائمة الجوال
menuToggle.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

// إغلاق النماذج عند النقر خارجها
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal')) {
        e.target.style.display = 'none';
    }
});

// منع إغلاق النماذج عند النقر داخلها
document.querySelectorAll('.modal-content').forEach(content => {
    content.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
// شات بوت لترشيح الفنادق
const chatbotContainer = document.getElementById('chatbot-container');
const openChatbot = document.getElementById('open-chatbot');
const closeChatbot = document.getElementById('close-chatbot');
const chatbotMessages = document.getElementById('chatbot-messages');
const chatbotInput = document.getElementById('chatbot-user-input');
const chatbotSend = document.getElementById('chatbot-send');

// فتح وإغلاق الشات بوت
openChatbot.addEventListener('click', () => {
  chatbotContainer.style.display = 'flex';
  openChatbot.style.display = 'none';
  addBotMessage('مرحباً! أنا مساعدك الشخصي لمساعدتك في العثور على الفندق المثالي. هل يمكنك وصف ما تبحث عنه؟ مثلاً: "أبحث عن فندق فاخر في صنعاء مع مسبح"');
});

closeChatbot.addEventListener('click', () => {
  chatbotContainer.style.display = 'none';
  openChatbot.style.display = 'flex';
});

// إرسال رسالة
chatbotSend.addEventListener('click', sendMessage);
chatbotInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

function sendMessage() {
  const message = chatbotInput.value.trim();
  if (message) {
    addUserMessage(message);
    chatbotInput.value = '';
    processUserMessage(message);
  }
}

function addUserMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message user-message';
  messageDiv.textContent = text;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function addBotMessage(text) {
  const messageDiv = document.createElement('div');
  messageDiv.className = 'chat-message bot-message';
  messageDiv.textContent = text;
  chatbotMessages.appendChild(messageDiv);
  chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

function processUserMessage(message) {
  // تحليل رسالة المستخدم وإيجاد الفنادق المناسبة
  const keywords = {
    'رخيص': { price: 150, operator: '<=' },
    'متوسط': { price: 250, operator: '<=' },
    'فاخر': { price: 350, operator: '>=' },
    'صنعاء': 'صنعاء',
    'عدن': 'عدن',
    'تعز': 'تعز',
    'مأرب': 'مأرب',
    'مسبح': 'مسبح',
    'إفطار': 'إفطار مجاني',
    'واي فاي': 'واي فاي مجاني'
  };

  const filters = {};
  
  // البحث عن الكلمات المفتاحية
  for (const [key, value] of Object.entries(keywords)) {
    if (message.includes(key)) {
      if (typeof value === 'string') {
        filters.amenities = filters.amenities || [];
        filters.amenities.push(value);
      } else if (key === 'صنعاء' || key === 'عدن' || key === 'تعز' || key === 'مأرب') {
        filters.city = value;
      } else {
        filters.price = value;
      }
    }
  }

  // البحث عن الفنادق المناسبة
  let recommendedHotels = appData.hotels.filter(hotel => {
    if (filters.city && hotel.city !== filters.city) return false;
    if (filters.price) {
      if (filters.price.operator === '<=' && hotel.price > filters.price.price) return false;
      if (filters.price.operator === '>=' && hotel.price < filters.price.price) return false;
    }
    if (filters.amenities) {
      return filters.amenities.every(amenity => hotel.amenities.includes(amenity));
    }
    return true;
  });

  // إظهار النتائج
  if (recommendedHotels.length > 0) {
    addBotMessage(`وجدت ${recommendedHotels.length} فندق يناسب طلبك:`);
    recommendedHotels.slice(0, 3).forEach(hotel => {
      addBotMessage(`- ${hotel.name} (${hotel.city}) - ${hotel.price} ريال/ليلة - ${'★'.repeat(hotel.rating)}`);
    });
    addBotMessage('يمكنك النقر على أي فندق في القائمة الرئيسية للحجز أو طلب المزيد من المساعدة.');
  } else {
    addBotMessage('لم أتمكن من العثور على فنادق تطابق طلبك. يمكنك تعديل شروط البحث أو تجربة كلمات أخرى.');
    addBotMessage('مثال: "أريد فندق في صنعاء بسعر أقل من 200 ريال"');
  }
}
// رسائل ترحيبية للشات بوت
const welcomeMessages = [
  "يمكنك أن تسألني مثل: 'أريد فندق رخيص في صنعاء'",
  "جرب أن تكتب: 'أبحث عن فندق فاخر مع مسبح'",
  "مثال آخر: 'عرض لي فنادق في عدن بسعر متوسط'"
];

// تحسين معالجة الرسائل
function processUserMessage(message) {
  message = message.toLowerCase();
  
  // تحقق من وجود كلمات ترحيبية
  if (message.includes('مرحبا') || message.includes('اهلا') || message.includes('hello')) {
    addBotMessage('مرحباً بك! كيف يمكنني مساعدتك في حجز الفندق؟');
    addBotMessage(welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);
    return;
  }

  // تحقق من طلب المساعدة
  if (message.includes('مساعدة') || message.includes('مساعده') || message.includes('help')) {
    addBotMessage('يمكنني مساعدتك في العثور على الفندق المناسب بناءً على:');
    addBotMessage('- الميزانية (رخيص، متوسط، فاخر)');
    addBotMessage('- المدينة (صنعاء، عدن، تعز، مأرب)');
    addBotMessage('- المرافق (مسبح، إفطار، واي فاي)');
    addBotMessage('جرب أن تكتب مثلاً: "أريد فندق في عدن مع مسبح وإفطار"');
    return;
  }

  // ... (الكود السابق لتصفية الفنادق)
} 
// تأكد من وجود هذا الكود
openChatbot.addEventListener('click', () => {
  chatbotContainer.style.display = 'flex';
  openChatbot.style.display = 'none';
  addBotMessage('مرحباً! أنا مساعدك...');
});















































// تهيئة Firebase للمصادقة
const auth = firebase.auth();

// عناصر واجهة المستخدم
const loginModal = document.getElementById('loginModal');
const facebookLogin = document.getElementById('facebookLogin');
const googleLogin = document.getElementById('googleLogin');
const guestLogin = document.getElementById('guestLogin');

// متغير لحالة المستخدم
let userLoggedIn = false;

// عند تحميل الصفحة، تحقق من حالة الدخول
document.addEventListener('DOMContentLoaded', function() {
    // إذا كان المستخدم قد اختار الزائر من قبل، تخطي نافذة الدخول
    if (localStorage.getItem('guestMode') {
        loginModal.style.display = 'none';
        return;
    }
    
    // تحقق من تسجيل الدخول عبر فيسبوك/جوجل
    auth.onAuthStateChanged(user => {
        if (user) {
            userLoggedIn = true;
            loginModal.style.display = 'none';
            showNotification('مرحباً بعودتك!', `تم الدخول كـ ${user.displayName || user.email}`);
        }
    });
});

// الدخول بفيسبوك
facebookLogin.addEventListener('click', function() {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            userLoggedIn = true;
            loginModal.style.display = 'none';
            showNotification('تم الدخول بنجاح', `مرحباً ${result.user.displayName}`);
        })
        .catch(error => {
            console.error('خطأ في الدخول:', error);
            alert('حدث خطأ أثناء محاولة الدخول بفيسبوك');
        });
});

// الدخول بجوجل
googleLogin.addEventListener('click', function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then(result => {
            userLoggedIn = true;
            loginModal.style.display = 'none';
            showNotification('تم الدخول بنجاح', `مرحباً ${result.user.displayName}`);
        })
        .catch(error => {
            console.error('خطأ في الدخول:', error);
            alert('حدث خطأ أثناء محاولة الدخول بجوجل');
        });
});

// الدخول كزائر
guestLogin.addEventListener('click', function() {
    localStorage.setItem('guestMode', 'true');
    loginModal.style.display = 'none';
    showNotification('مرحباً بك!', 'أنت الآن تتصفح كزائر');
});











// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVwLER-g5AL8TH52Go2sTEbS7O-HwaimE",
    authDomain: "mahjooz-aca56.firebaseapp.com",
    projectId: "mahjooz-aca56",
    storageBucket: "mahjooz-aca56.appspot.com",
    messagingSenderId: "339972782124",
    appId: "1:339972782124:web:49dabf8ed86f0ebfae3989",
    measurementId: "G-49LJS40ZG2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// عناصر DOM
const loginScreen = document.getElementById('loginScreen');
const mainContent = document.getElementById('mainContent');
const googleLoginBtn = document.getElementById('googleLogin');
const facebookLoginBtn = document.getElementById('facebookLogin');
const twitterLoginBtn = document.getElementById('twitterLogin');
const logoutBtn = document.getElementById('logoutBtn');

// تسجيل الدخول بجوجل
function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .catch(error => {
            console.error("Google Sign-In Error:", error);
            alert("حدث خطأ أثناء تسجيل الدخول بجوجل");
        });
}

// تسجيل الدخول بفيسبوك
function signInWithFacebook() {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider)
        .catch(error => {
            console.error("Facebook Sign-In Error:", error);
            alert("حدث خطأ أثناء تسجيل الدخول بفيسبوك");
        });
}

// تسجيل الدخول بتويتر
function signInWithTwitter() {
    const provider = new firebase.auth.TwitterAuthProvider();
    auth.signInWithPopup(provider)
        .catch(error => {
            console.error("Twitter Sign-In Error:", error);
            alert("حدث خطأ أثناء تسجيل الدخول بتويتر");
        });
}

// تسجيل الخروج
function signOut() {
    auth.signOut()
        .catch(error => {
            console.error("Sign Out Error:", error);
            alert("حدث خطأ أثناء تسجيل الخروج");
        });
}

// مراقبة حالة المصادقة
auth.onAuthStateChanged(user => {
    if (user) {
        // المستخدم مسجل الدخول
        console.log("User logged in:", user);
        loginScreen.style.display = "none";
        mainContent.style.display = "block";
    } else {
        // لا يوجد مستخدم مسجل الدخول
        console.log("User logged out");
        loginScreen.style.display = "block";
        mainContent.style.display = "none";
    }
});

// إضافة مستمعي الأحداث
googleLoginBtn.addEventListener('click', signInWithGoogle);
facebookLoginBtn.addEventListener('click', signInWithFacebook);
twitterLoginBtn.addEventListener('click', signInWithTwitter);
logoutBtn.addEventListener('click', signOut);

// يمكنك إضافة المزيد من الوظائف هنا حسب احتياجات التطبيق
