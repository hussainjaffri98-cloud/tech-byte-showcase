import keyboardImg from "@/assets/keyboard.jpg";
import keyboardImg2 from "@/assets/products/keyboard-2.jpg";
import keyboardImg3 from "@/assets/products/keyboard-3.jpg";
import mouseImg from "@/assets/mouse.jpg";
import mouseImg2 from "@/assets/products/mouse-2.jpg";
import mouseImg3 from "@/assets/products/mouse-3.jpg";
import headphonesImg from "@/assets/headphones.jpg";
import headphonesImg2 from "@/assets/products/headphones-2.jpg";
import headphonesImg3 from "@/assets/products/headphones-3.jpg";
import usbHubImg from "@/assets/usb-hub.jpg";
import usbHubImg2 from "@/assets/products/usb-hub-2.jpg";
import usbHubImg3 from "@/assets/products/usb-hub-3.jpg";
import mousepadImg from "@/assets/mousepad.jpg";
import mousepadImg2 from "@/assets/products/mousepad-2.jpg";
import mousepadImg3 from "@/assets/products/mousepad-3.jpg";
import webcamImg from "@/assets/webcam.jpg";
import webcamImg2 from "@/assets/products/webcam-2.jpg";
import webcamImg3 from "@/assets/products/webcam-3.jpg";
import monitorImg from "@/assets/monitor.jpg";
import monitorImg2 from "@/assets/products/monitor-2.jpg";
import monitorImg3 from "@/assets/products/monitor-3.jpg";

export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Phantom MX Pro Keyboard",
    price: "$189.99",
    category: "Keyboards",
    description: "Mechanical RGB keyboard with hot-swappable switches, aircraft-grade aluminum frame, and per-key lighting.",
    image: keyboardImg,
    images: [keyboardImg, keyboardImg2, keyboardImg3],
    featured: true,
  },
  {
    id: "2",
    name: "Vortex Elite Mouse",
    price: "$129.99",
    category: "Mouse",
    description: "Ultra-lightweight wireless gaming mouse with 25K DPI sensor and 70-hour battery life.",
    image: mouseImg,
    images: [mouseImg, mouseImg2, mouseImg3],
    featured: true,
  },
  {
    id: "3",
    name: "Nova 7.1 Headset",
    price: "$219.99",
    category: "Headphones",
    description: "Surround sound gaming headset with active noise cancellation and memory foam cushions.",
    image: headphonesImg,
    images: [headphonesImg, headphonesImg2, headphonesImg3],
    featured: true,
  },
  {
    id: "4",
    name: "HyperLink USB-C Hub",
    price: "$79.99",
    category: "Accessories",
    description: "7-in-1 USB-C docking station with 4K HDMI, 100W PD charging, and SD card reader.",
    image: usbHubImg,
    images: [usbHubImg, usbHubImg2, usbHubImg3],
  },
  {
    id: "5",
    name: "Flux RGB Desk Mat",
    price: "$59.99",
    category: "Mouse Pads",
    description: "Extended RGB mouse pad with micro-textured surface and 12 lighting modes.",
    image: mousepadImg,
    images: [mousepadImg, mousepadImg2, mousepadImg3],
  },
  {
    id: "6",
    name: "ClearView 4K Webcam",
    price: "$149.99",
    category: "Accessories",
    description: "4K ultra HD webcam with auto-focus, noise-reducing mic, and privacy shutter.",
    image: webcamImg,
    images: [webcamImg, webcamImg2, webcamImg3],
  },
  {
    id: "7",
    name: "Arc Display 34\" Curved",
    price: "$599.99",
    category: "Monitors",
    description: "34-inch ultrawide curved monitor with 165Hz refresh rate and 1ms response time.",
    image: monitorImg,
    images: [monitorImg, monitorImg2, monitorImg3],
    featured: true,
  },
];

export const categories = ["All", "Keyboards", "Mouse", "Headphones", "Monitors", "Mouse Pads", "Accessories"];
