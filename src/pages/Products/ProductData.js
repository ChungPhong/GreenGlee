const productData = [
  {
    id: "item-1",
    title: "Set muỗng mo cau Green Joy 17cm",
    price: "616,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612220203_5088_1686582123.8827.webp&w=1920&q=75",
    description: "(17cm)",
  },
  {
    id: "item-2",
    title: "Set muỗng mo cau Green Joy (13 cm)",
    price: "616,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612222234_5088_1686583354.1957.webp&w=1920&q=75",
    description: "(13cm)",
  },
  {
    id: "item-3",
    title: "Set chén mo cau vuông Green Joy (8cm)",
    price: "1,015,000₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612223557_5088_1686584157.0571.webp&w=1920&q=75",
    description: "(8cm)",
  },
  {
    id: "item-4",
    title: "Set đĩa/dĩa mo cau tròn Green Joy (18cm)",
    price: "1,377,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612230133_5088_1686585693.7982.webp&w=1920&q=75",
    description: "(18cm)",
  },
  {
    id: "item-5",
    title: "Set đĩa/dĩa vuông mo cau Green Joy (16cm)",
    price: "1,450,000₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612232931_5088_1686587371.7755.webp&w=1920&q=75",
    description: "(16cm)",
  },
  {
    id: "item-6",
    title: "Set đĩa/dĩa vuông mo cau Green Joy (16cm)",
    price: "2,030,000₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612233859_5088_1686587939.4126.webp&w=1920&q=75",
    description: "(16cm)",
  },
  {
    id: "item-7",
    title: "Set đĩa/dĩa mo cau chữ nhật Green Joy (28cm)",
    price: "2,102,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612222931_5088_1686583771.8661.webp&w=1920&q=75",
    description: "(28cm)",
  },
  {
    id: "item-8",
    title: "Set đĩa/dĩa mo cau vuông Green Joy (20cm)",
    price: "2,102,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612232542_5088_1686587142.1113.webp&w=1920&q=75",
    description: "(20cm)",
  },
  {
    id: "item-9",
    title: "Set đĩa/dĩa vuông mo cau Green Joy (20cm)",
    price: "2,102,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612234550_5088_1686588350.4711.webp&w=1920&q=75",
    description: "(20cm)",
  },
  {
    id: "item-10",
    title: "Set đĩa/dĩa tròn mo cau Green Joy (đường kính 25cm)",
    price: "2,392,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612224414_5088_1686584654.9765.webp&w=1920&q=75",
    description: "(25cm)",
  },
  {
    id: "item-11",
    title: "Set đĩa/dĩa vuông mo cau Green Joy (25cm)",
    price: "2,537,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612220203_5088_1686582123.8827.webp&w=1920&q=75",
    description: "(25cm)",
  },
  {
    id: "item-12",
    title: "Set đĩa/dĩa vuông mo cau Green Joy (16cm)",
    price: "2,827,500₫",
    Category: "Đồ dùng từ mo cau",
    imageUrl:
      "https://greenjoystraw.com/_next/image?url=https%3A%2F%2Fd24rsy7fvs79n4.cloudfront.net%2Fgreenjoystraw.com%2F500x500%2F20230612233405_5088_1686587645.799.webp&w=1920&q=75",
    description: "(16cm)",
  },
];
export default productData;
