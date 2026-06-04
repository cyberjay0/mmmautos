/* ==========================================================================
   MMM Autos Car Inventory & Site Configuration Data
   ========================================================================== */

export const siteConfig = {
    // Hero background image wallpaper url
    heroImage: "/MMM hero.png"
};

export const cars = [
    // --- DEALS OF THE WEEK SECTION ---
    {
        id: "honda-accord-2014",
        name: "Honda Accord 2014",
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
        video: "https://res.cloudinary.com/dpwexegce/video/upload/v1780529286/mmm_accord_coupe_k19lpu.mp4",
        tag: "DISTRESS DEAL",
        tagClass: "label-luxury",
        specs: ["Engine: V6", "Mileage: 89k mi", "Non-Accidented", "Keyless Entry"],
        isDeal: true
    },
    {
        id: "Cls63",
        name: "Mercedes-Benz CLS 63 2017",
        status: "Belgium Grade",
        price: "₦35,000,000",
        photo: "/CLS card.jpeg",
        images: [
            "/CLS front.jpeg",
            "/CLS side.jpeg",
            "/CLS back.jpeg",
            "/CLS steering.jpeg",
            "/CLS interior.jpeg",
            "/CLS interior 2.jpeg",
            "/CLS Engine.jpeg"
        ],
        video: "https://res.cloudinary.com/dpwexegce/video/upload/v1780529294/mmm_cls_geqswn.mp4",
        tag: "BELGIUM GRADE",
        tagClass: "label-luxury",
        specs: ["Engine: V8 BiTurbo", "Mileage: 45k mi", "Red Interior", "Keyless Go"],
        isDeal: true
    },
    {
        id: "Panamera2012",
        name: "Porsche Panamera 2012",
        status: "Local Used",
        price: "₦13,000,000",
        photo: "/Porsche Card.jpeg",
        images: [
            "/Porsche Front.jpeg",
            "/Porshe Back.jpeg",
            "/Porsche Interior 1.jpeg",
            "/Porsche steering.jpeg",
            "/Porsche Interior 1.jpeg",
            "/Porsche Interior 2.jpeg"
        ],
        video: "https://res.cloudinary.com/dpwexegce/video/upload/v1780529285/Porsche_Video_rnagep.mp4",
        tag: "LOCAL USED",
        tagClass: "label-luxury",
        specs: ["Engine: V6", "Mileage: 120k mi", "Neatly Used", "Bucket Seats"],
        isDeal: true
    },

    // --- FOREIGN USED INVENTORY SECTION ---
    {
        id: "Mercedes-Benz-e63",
        name: "Mercedes Benz E63 2010",
        status: "Foreign Used",
        price: "₦36,000,000",
        photo: "/e63 card.jpeg",
        images: [
            "/e63 front.jpeg",
            "/e63 back.jpeg",
            "/e63 steering.jpeg",
            "/e63 interior.jpeg",
            "/e63 dash.jpeg",
            "/e63 VIN.jpeg"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-car-driving-through-the-city-43187-large.mp4",
        tag: "SUV",
        tagClass: "label-luxury-white",
        category: "suv",
        specs: ["Engine: V8 Biturbo", "AMG Mode", "Panoramic Roof", "White Seats"],
        isInventory: true
    },
    {
        id: "Jetour2024",
        name: "Jetour Dash 2024",
        status: "Foreign Used",
        price: "₦31,000,000",
        photo: "/Jetour side.jpeg",
        images: [
            "/Jetour front.jpeg",
            "/jetour interior 1.jpeg",
            "/Jetour steering.jpeg",
            "/Jetour dash.jpeg",
            "/jetour interior 2.jpeg",
            "/Jetour interior 3.jpeg",
            "/jetour back.jpeg"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-car-headlights-glowing-in-the-dark-43234-large.mp4",
        tag: "SEDAN",
        tagClass: "label-luxury-white",
        category: "sedan",
        specs: ["Engine: 4L Turbo", "Mileage: 4k miles", "Non-Accidented", "Keyless Go"],
        isInventory: true
    },
    {
        id: "2021ToyotaCamry",
        name: "Toyota Camry SE 2021",
        status: "Foreign Used",
        price: "₦32,000,000",
        photo: "/Camry card.jpeg",
        images: [
            "/Camry front.jpeg",
            "/Camry interior.jpeg",
            "/Camry steering.jpeg",
            "/Camry dash.jpeg",
            "/Camry interior 2.jpeg",
            "/Camry vin.jpeg",
            "/Camry back.jpeg"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-modern-car-driving-on-a-highway-43236-large.mp4",
        tag: "4X4 SUV",
        tagClass: "label-luxury-white",
        category: "suv",
        specs: ["Engine: V8 4.6L", "Mileage: 72k mi", "Non-Accidented", "Push Button Start"],
        isInventory: true
    },
    {
        id: "Tacoma2018",
        name: "Toyota Tacoma 2018",
        status: "Foreign Used",
        price: "₦38,000,000",
        photo: "/Tacoma Side.jpeg",
        images: [
            "/Tacoma front.jpeg",
            "/Tacoma steering.jpeg",
            "/Tacoma Dash.jpeg",
            "/Tacoma Interior.jpeg",
            "/Tacoma Side.jpeg",
            "/Tacoma Back.jpeg"
        ],
        video: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-fast-on-a-highway-34298-large.mp4",
        tag: "LUXURY SUV",
        tagClass: "label-luxury-white",
        category: "suv luxury",
        specs: ["Engine: V6 Supercharged", "Mileage: 50k mi", "Non-Accidented", "Keyless Entry"],
        isInventory: true
    }
];
