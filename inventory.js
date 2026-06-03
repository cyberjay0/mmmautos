/* ==========================================================================
   MMM Autos Car Inventory & Site Configuration Data
   ========================================================================== */

export const siteConfig = {
    // Hero background image wallpaper url
    heroImage: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1920&q=80"
};

export const cars = [
    // --- DEALS OF THE WEEK SECTION ---
    {
        id: "honda-accord-2013",
        name: "Honda Accord 2013",
        status: "Belgium Grade",
        price: "₦9,500,000",
        photo: "/coupe card.jpeg",
        images: [
            "/coupe front.jpeg",
            "/coupe back.jpeg",
            "/coupe steering.jpeg",
            "/coupe interior 1.jpeg",
            "/coupe interior.jpeg",
            "/coupe vin.jpeg"
        ],
        video: "/public/mmm accord coupe.mp4",
        tag: "DISTRESS DEAL",
        tagClass: "label-luxury",
        specs: ["Engine: L4 2.4L", "Mileage: 89k mi", "Non-Accidented", "Keyless Entry"],
        isDeal: true
    },
    {
        id: "Cls63",
        name: "Mercedes-Benz CLS 63 2017",
        status: "Belgium Grade",
        price: "₦35,000,000",
        photo: "public/CLS card.jpeg",
        images: [
            "public/CLS front.jpeg",
            "public/CLS side.jpeg",
            "public/CLS back.jpeg",
            "public/CLS steering.jpeg",
            "public/CLS interior.jpeg",
            "public/CLS interior 2.jpeg",
            "public/CLS Engine.jpeg"
        ],
        video: "public/mmm cls.mp4",
        tag: "BELGIUM GRADE",
        tagClass: "label-luxury",
        specs: ["Engine: V8 BiTurbo", "Mileage: 45k mi", "Non-Accidented", "Keyless Go"],
        isDeal: true
    },
    {
        id: "accord2013",
        name: "Honda Accord 2013",
        status: "Local Used",
        price: "₦4,200,000",
        photo: "https://images.unsplash.com/photo-1593460354583-421711202868?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1593460354583-421711202868?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-white-car-driving-on-a-wet-highway-at-night-42289-large.mp4",
        tag: "LOCAL USED",
        tagClass: "label-luxury",
        specs: ["Engine: L4 2.4L", "Mileage: 120k mi", "Clean Title", "Key Start"],
        isDeal: true
    },

    // --- FOREIGN USED INVENTORY SECTION ---
    {
        id: "lexusrx350_2018",
        name: "Lexus RX 350 2018",
        status: "Foreign Used",
        price: "₦22,800,000",
        photo: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&q=80"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-car-driving-through-the-city-43187-large.mp4",
        tag: "SUV",
        tagClass: "label-luxury-white",
        category: "suv",
        specs: ["Engine: V6 3.5L", "Mileage: 58k mi", "Non-Accidented", "Panoramic Roof"],
        isInventory: true
    },
    {
        id: "mbc300_2017",
        name: "Mercedes-Benz C300 2017",
        status: "Foreign Used",
        price: "₦15,500,000",
        photo: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-car-headlights-glowing-in-the-dark-43234-large.mp4",
        tag: "SEDAN",
        tagClass: "label-luxury-white",
        category: "sedan",
        specs: ["Engine: L4 Turbo", "Mileage: 64k mi", "Non-Accidented", "Keyless Go"],
        isInventory: true
    },
    {
        id: "landcruiser2016",
        name: "Toyota Land Cruiser 2016",
        status: "Foreign Used",
        price: "₦38,000,000",
        photo: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=600&q=80"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-modern-car-driving-on-a-highway-43236-large.mp4",
        tag: "4X4 SUV",
        tagClass: "label-luxury-white",
        category: "suv",
        specs: ["Engine: V8 4.6L", "Mileage: 72k mi", "Non-Accidented", "Push Button Start"],
        isInventory: true
    },
    {
        id: "rangerover2018",
        name: "Range Rover Sport 2018",
        status: "Foreign Used",
        price: "₦28,500,000",
        photo: "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-highway-34298-large.mp4",
        tag: "LUXURY SUV",
        tagClass: "label-luxury-white",
        category: "suv luxury",
        specs: ["Engine: V6 Supercharged", "Mileage: 50k mi", "Non-Accidented", "Keyless Entry"],
        isInventory: true
    }
];
