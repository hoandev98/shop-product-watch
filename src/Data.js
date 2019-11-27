// Our product database.
const sampleProducts = [
  {
    id: 1,
    name: "Letsfit Smart Watch",
    category: "Smart Watches",
    price: 555,
    description:
    "custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n"
    +"Extra Buckle Included To Use With Interchangeable Straps ; AMOLED Display: Active-Matrix Organic Light-Emitting Diode",
    popular: true,
    imageUrls: [
      "https://images-na.ssl-images-amazon.com/images/I/41d1k2P8deL.jpg"
    ]
  },
  {
    id: 2,
    name: "SamSung F-91W-1XY",
    category: "Smart Watches",
    price: 1011,
    description:
      "Shaped in an iconic samsung design, this watch features a digital display, stopwatch and an LED backlight. The watch is housed in a durable resin case. Suitable for everyday styling.",

    popular: true,
    imageUrls: [
      "https://thumbs1.ebaystatic.com/pict/2028042972564040_1.jpg",
      "https://i.ytimg.com/vi/XJGI-v31-dk/maxresdefault.jpg"
    ]
  },
  {
    id: 3,
    name: "Seiko Silvertone Black Dial Solar Calendar Watch",
    category: "Smart Watches",
    price: 2000,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/zIIAAOSwa~NdwmV0/$_1.JPG",
    ]
  },
  {
    id: 4,
    name: "UMIDIGI Uwatch2 Smart Watch For Andriod, IOS Full Touch Screen Sport Monitor NEW",
    category: "Smart Watches",
    price: 1000,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/JiMAAOSwBmhdcomX/$_1.JPG",
    ]
  },
  {
    id: 5,
    name: "Smart Bluetooth Wrist Watch DZ09 Multifunction Touchscreen Digital Phonemate US",
    category: "Smart Watches",
    price: 2220,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/rHsAAOSws~ldcNHN/$_1.JPG",
    ]
  },

  {
    id: 6,
    name: "USA Smart Watch with GSM Locator Touch Screen Tracker SOS for Kids Children",
    category: "Smart Watches",
    price: 1020,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTI1OVgxMjU5/z/D2IAAOSwMSddf32Z/$_1.JPG",
    ]
  },
  {
    id: 7,
    name: "LEMFO Smart Watch Sports Bracelet Fitness Tracker With Heart Rate Blood Pressure",
    category: "Smart Watches",
    price: 2340,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/Z2wAAOSwoMddI~XO/$_1.JPG",
    ]
  },
  {
    id: 8,
    name: "LEMFO I5 Men Women Smart Watch Heart Rate Blood Oxygen Pressure Sports Smartband",
    category: "Smart Watches",
    price: 1300,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: false,
    imageUrls: [
      "https://thumbs1.ebaystatic.com/pict/2933036136684040_1.jpg",
    ]
  },
  {
    id: 9,
    name: "Smart Watch M4 Band Sport Tracker Bracelet Blood Monitor For Xiaomi Mi band 4",
    category: "Smart Watches",
    price: 2200,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/ODAwWDgwMA==/z/sgoAAOSwHwRdsBoq/$_1.JPG",
    ]
  },
  {
    id: 10,
    name: "Samsung Gear Fit 2 Pro - Small Black Smart Sport Fitness GPS Excellent",
    category: "Smart Watches",
    price: 1045,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: false,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTAwMFg2Njc=/z/E18AAOSw18NdwcyL/$_1.JPG",
    ]
  },
  {
    id: 11,
    name: "Bluetooth Smart Watch Camera Phone Mate GSM SIM For Android iPhone Samsung DZ09",
    category: "Smart Watches",
    price : 900,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: false,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/lUYAAOSwuW9dZ7rC/$_1.JPG",
    ]
  },
  {
    id: 12,
    name: "Sport Smart Watch IP67 Waterproof Watch Heart Rate Monitor Sports Bracelet B57*W",
    category: "Smart Watches",
    price: 1700,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: false,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTAwMFgxMDAw/z/7cAAAOSw3QldQ2mC/$_1.JPG",
    ]
  },
  {
    id: 13,
    name: "Acer Leap Ware Smart Watch Touchscreen Heart Rate Accelerometer - Purple",
    category: "New",
    price: 1080,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/EGUAAOSwB3JdOguD/$_1.JPG",
    ]
  },
  {
    id: 14,
    name: "Leap Ware Smart Watch Touchscreen Heart Rate  Accelerometer Navy Blue",
    category: "New",
    price: 2800,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://i.ebayimg.com/00/s/MzkxWDUwMA==/z/ieYAAOSw1r5bbTdh/$_1.JPG",
    ]
  },
  {
    id: 15,
    name: "Timex Men's Easy Reader Leather Strap 38mm Watch",
    category: "Classic Watches",
    price: 4980,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/a6/de/8f/2ef9d38567f60373c2d44fd84bbdb4da.jpg",
    ]
  },
  {
    id: 16,
    name: "Watch, Pocket Watch,Classic Vintage Stainless Steel Roman Numerals Quartz Watch with Chain Christmas Birthday Graduation Gifte",
    category: "Classic Watches",
    price: 1980,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/92/d8/19/790151028c22a7219f75403358d2e65c.jpg",
    ]
  },
  {
    id: 17,
    name: "Chrono XL Chronograph Blue Dial Men's Watch",
    category: "Clock",
    price: 4780,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/3c/94/9d/45be065268b276fcb0c3bc81991c68d9.jpg",
    ]
  },
  {
    id: 18,
    name: "Quickster Chronograph Blue Dial Men's Watch",
    category: "Clock",
    price: 1080,
description:
"custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms."
    +"Smartphone notifications & Touchscreen functionality; Activity & custom goal tracking; Customizable faces, bands, & music controls. supported features may vary between platforms"
    +"Band & Case Material: Stainless Steel; Case Color: Silver with Clear Stones on Watch Bezel; Band Color; Case Size: 42 mm; Case Thickness: 11 mm; Band size: 18 mm; Water Resistance: 1 ATM; ok for contact with water, not suitable for swimming"
    +"Battery: 300 mAh. 2 hours charge time. Life: Estimated 24 hours based on usage"
    +"Powered with Wear OS by Google, a trademark of Google LLC Compatible with Android OS 4.3+ or iPhone 5/iOS 9.0+. All devices have Bluetooth(R) 41 Low Energy and Wi-Fi 80211 b/g/n",
    popular: true,
    imageUrls: [
      "https://salt.tikicdn.com/cache/280x280/ts/product/a4/a5/fe/5af1863daa739fea0081db991870cf8a.jpg",
    ]
  }
];

// List of item categories.
const categories = [
  {
    name: "All categories",
    icon: "list"
  },
  {
    name: "New",
    icon: "fiber_new"
  },
  {
    name: "Smart Watches",
    icon: "watch"
  },
  {
    name: "Classic Watches",
    icon: "stars"
  },
  {
    name: "Clock",
    icon: "alarm"
  }

];

// Data for rendering menu.
const dataForTheMenu = [
    { name: "Home page", url: "/", icon: "home", id: 0 },
    {
      name: "Product categories",
      id: 1,
      children: categories.map((x, i) => {
        return {
          name: x.name,
          id: 2 + i,
          url: "/?category=" + x.name + "&directClick=true",
          icon: x.icon
        };
      })
    },

  ];


export { sampleProducts, categories, dataForTheMenu };
