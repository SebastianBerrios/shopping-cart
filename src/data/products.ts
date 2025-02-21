import { Product } from "../types/product";

export const productsAPI: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro 16"',
    description: "Apple M2 Pro chip, 16GB RAM, 512GB SSD",
    price: 2499,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    description: "256GB, Titanium Gray",
    price: 999,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1696446702183-cbd13d78e1e7?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5",
    description: "Wireless Noise Cancelling Headphones",
    price: 399,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    name: "iPad Air",
    description: "10.9-inch, 256GB, Wi-Fi",
    price: 749,
    category: "Tablets",
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 5,
    name: "Dell XPS 15",
    description: '15.6" 4K, i9, 32GB RAM, 1TB SSD',
    price: 2299,
    category: "Laptops",
    image:
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    name: "Samsung Galaxy S24 Ultra",
    description: "512GB, Phantom Black",
    price: 1299,
    category: "Smartphones",
    image:
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 7,
    name: "AirPods Pro",
    description: "2nd Generation with MagSafe Case",
    price: 249,
    category: "Audio",
    image:
      "https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 8,
    name: "Microsoft Surface Pro 9",
    description: '13" 2-in-1, i7, 16GB RAM, 256GB',
    price: 1599,
    category: "Tablets",
    image:
      "https://images.unsplash.com/photo-1617775047746-5b36a40109f5?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 9,
    name: "Logitech MX Master 3S",
    description: "Wireless Performance Mouse, Bluetooth & USB-C",
    price: 99,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1694175640153-00c83f4a36ef?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 10,
    name: "Samsung 49 UltraWide Monitor",
    description: "49-inch QLED, 5120x1440, 240Hz",
    price: 1399,
    category: "Monitors",
    image:
      "https://plus.unsplash.com/premium_photo-1680721575441-18d5a0567269?q=80&w=2004&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 11,
    name: "Razer Huntsman V2",
    description: "Optical Gaming Keyboard, Clicky Switches",
    price: 199,
    category: "Accessories",
    image:
      "https://plus.unsplash.com/premium_photo-1664194583917-b0ba07c4ce2a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 12,
    name: "GoPro HERO11 Black",
    description: "5.3K Video, Waterproof, HyperSmooth 5.0",
    price: 499,
    category: "Cameras",
    image:
      "https://plus.unsplash.com/premium_photo-1685195883710-fe01b26e7a4d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhbWFyYXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 13,
    name: "Sony Alpha A7 IV",
    description: "33MP Full-Frame Mirrorless Camera, 4K Video",
    price: 2499,
    category: "Cameras",
    image:
      "https://images.unsplash.com/photo-1581591524425-c7e0978865fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 14,
    name: "Oculus Quest 3",
    description: "All-in-One VR Headset, 128GB",
    price: 499,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 15,
    name: "PlayStation 5",
    description: "825GB SSD, DualSense Controller",
    price: 499,
    category: "Gaming",
    image:
      "https://images.unsplash.com/photo-1507457379470-08b800bebc67?q=80&w=2109&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
