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
        video: "/Mmm-video.mp4",
        tag: "DISTRESS DEAL",
        tagClass: "label-luxury",
        isDeal: true
    },
    {
        id: "gle2019",
        name: "Mercedes-Benz GLE 350 2019",
        status: "Belgium Grade",
        price: "₦18,500,000",
        photo: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
        images: [
            "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&q=80",
            "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-highway-34298-large.mp4",
        tag: "BELGIUM GRADE",
        tagClass: "label-luxury",
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
        isInventory: true
    }
];
