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

import ssd1 from "@/assets/products/ssd-1.jpg";
import ssd2 from "@/assets/products/ssd-2.jpg";
import ssd3 from "@/assets/products/ssd-3.jpg";
import ssd4 from "@/assets/products/ssd-4.jpg";
import ram1 from "@/assets/products/ram-1.jpg";
import ram2 from "@/assets/products/ram-2.jpg";
import ram3 from "@/assets/products/ram-3.jpg";
import ram4 from "@/assets/products/ram-4.jpg";
import rom1 from "@/assets/products/rom-1.jpg";
import rom2 from "@/assets/products/rom-2.jpg";
import rom3 from "@/assets/products/rom-3.jpg";
import rom4 from "@/assets/products/rom-4.jpg";
import switch1 from "@/assets/products/switch-1.jpg";
import switch2 from "@/assets/products/switch-2.jpg";
import switch3 from "@/assets/products/switch-3.jpg";
import switch4 from "@/assets/products/switch-4.jpg";
import sfp1 from "@/assets/products/sfp-1.jpg";
import sfp2 from "@/assets/products/sfp-2.jpg";
import sfp3 from "@/assets/products/sfp-3.jpg";
import sfp4 from "@/assets/products/sfp-4.jpg";
import router1 from "@/assets/products/router-1.jpg";
import router2 from "@/assets/products/router-2.jpg";
import router3 from "@/assets/products/router-3.jpg";
import router4 from "@/assets/products/router-4.jpg";

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
  {
    id: "8",
    name: "Velocity NVMe SSD 2TB",
    price: "$179.99",
    category: "Storage",
    description: "PCIe Gen4 NVMe M.2 SSD with 7,000MB/s read speeds, DRAM cache, and AES 256-bit encryption.",
    image: ssd1,
    images: [ssd1, ssd2, ssd3, ssd4],
    featured: true,
  },
  {
    id: "9",
    name: "Apex DDR5 RAM 32GB Kit",
    price: "$149.99",
    category: "Memory",
    description: "DDR5-6000 dual-channel kit with RGB heatspreader, Intel XMP 3.0, and on-die ECC support.",
    image: ram1,
    images: [ram1, ram2, ram3, ram4],
  },
  {
    id: "10",
    name: "FlashCore ROM Module",
    price: "$39.99",
    category: "Components",
    description: "Industrial-grade EEPROM module with 256Kb capacity, SPI interface, and 1M write-cycle endurance.",
    image: rom1,
    images: [rom1, rom2, rom3, rom4],
  },
  {
    id: "11",
    name: "NetBlade 24-Port Switch",
    price: "$349.99",
    category: "Networking",
    description: "Managed L2+ Gigabit switch with PoE+, VLAN support, and fanless design for quiet operation.",
    image: switch1,
    images: [switch1, switch2, switch3, switch4],
    featured: true,
  },
  {
    id: "12",
    name: "OptiLink SFP+ 10G Module",
    price: "$29.99",
    category: "Networking",
    description: "10Gbps SFP+ transceiver with LC duplex connector, 300m multimode range, and DDM monitoring.",
    image: sfp1,
    images: [sfp1, sfp2, sfp3, sfp4],
  },
  {
    id: "13",
    name: "Sentinel Pro Enterprise Router",
    price: "$499.99",
    category: "Networking",
    description: "Enterprise dual-WAN router with VPN, firewall, WiFi 6E, and advanced QoS for up to 200 clients.",
    image: router1,
    images: [router1, router2, router3, router4],
    featured: true,
  },
];

export const categories = [
  "All",
  "Keyboards",
  "Mouse",
  "Headphones",
  "Monitors",
  "Mouse Pads",
  "Accessories",
  "Storage",
  "Memory",
  "Components",
  "Networking",
];
