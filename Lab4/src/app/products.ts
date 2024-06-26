export interface Product {
  link: string;
  id: number;
  name: string;
  price: number;
  description: string;
  rating: number;
  image: string;
}

export const products = [
  {
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 1,
    name: 'Apple iPhone 15 Pro Max',
    price: 799,
    description: 'The Apple iPhone 15 Pro Max is a heavy-duty flagship made of titanium. The latest Apple A17 Pro chip is responsible for the uncompromising performance of the smartphone.',
    rating: 5.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium", 
  },
  {
    link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 2,
    name: 'Apple iPhone 13',
    price: 699,
    description: 'The Apple iPhone 13 has a 6.1-inch Super Retina XDR display that has an incredibly high pixel density - photos, videos, and text look amazingly sharp. ',
    rating: 4.7,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 3,
    name: 'Apple iPhone 14',
    price: 299,
    description: 'RAM size: 6GB,Processor: 6-core Apple A15 Bionic, internal memory: 128.0 GB,battery capacity: 3279.0 mAh',
    rating: 5.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 4,
    name: 'Xiaomi Redmi 12',
    price: 213,
    description: 'diagonal: 6.79 inches, RAM size: 8 GB, internal memory: 256.0 GB,battery capacity: 5000.0 mAh',
    rating: 3.5,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h0c/h33/82304907214878.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 5,
    name: 'Samsung Galaxy A24',
    price: 715,
    description: 'diagonal: 6.5 inches, RAM size: 6 GB, processor: 8-core MediaTek Helio G99, internal memory: 128.0 GB, battery capacity: 5000.0 mAh',
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 6,
    name: 'Apple iPhone 11',
    price: 800,
    description: 'The functional and stylish Apple iPhone 11 smartphone in a metal case is capable of providing not only everyday communication and entertainment, but also productive work. The image on the 6.1-inch smartphone screen has amazing detail and color reproduction. Oleophobic coating eliminates heavy screen contamination.',
    rating: 5.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 7,
    name: 'Samsung Galaxy A54',
    price: 600,
    description: "diagonal: 6.4 inches, RAM size: 8 GB, processor: 8-core Samsung Exynos 1380, internal memory: 256.0 GB, battery capacity: 5000.0 mAh",
    rating: 4.8,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-6-gb-128-gb-seryi-109734268/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 8,
    name: 'Xiaomi Redmi Note 12',
    price: 500,
    description: 'diagonal: 6.67 inches, RAM size: 6 GB, processor: 8-core Qualcomm Snapdragon 685, internal memory: 128.0 GB, battery capacity: 5000.0 mAh',
    rating: 5.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/hca/h10/79755729600542.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/xiaomi-redmi-13c-8-gb-256-gb-chernyi-114695323/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 9,
    name: 'Xiaomi Redmi 13C',
    price: 300,
    description: 'diagonal: 6.74 inches, RAM size: 8 GB, processor: 8-core MediaTek Helio G85, internal memory: 256.0 GB, battery capacity: 5000.0 mAh',
    rating: 3.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
  },
  {
    link: 'https://kaspi.kz/shop/p/samsung-galaxy-a34-5g-8-gb-256-gb-chernyi-109880804/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_common_new&gclid=EAIaIQobChMI057p9LDJhAMV0maRBR3OeAh5EAAYASAAEgIKn_D_BwE',
    id: 10,
    name: 'Samsung Galaxy A34',
    price: 599,
    description: 'diagonal: 6.6 inches, RAM size: 8 GB, processor: 8-core MediaTek Dimensity 1080, internal memory size: 256.0 GB, battery capacity: 5000.0 mAh',
    rating: 5.0,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h3b/hac/80074921574430.jpg?format=gallery-medium",
  }
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/