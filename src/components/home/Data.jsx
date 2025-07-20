export const cardsData = [
  {
    title: "مجموع سفارشات امروز",
    content: "96 سفارش",
    status: "down",
    comparisonPercentage: "6%",
    comparisonTime: "روز قبل",
    img: "/assets/home/business.png",
  },
  {
    title: "مجموع فروش امروز",
    content: "1,200,000 تومان",
    status: "up",
    comparisonPercentage: "6%",
    comparisonTime: "روز قبل",
    img: "/assets/home/trade.png",
  },
  {
    title: "نرخ تبدیل",
    content: "36 درصد",
    status: "up",
    comparisonPercentage: "6%",
    comparisonTime: "روز قبل",
    img: "/assets/home/customer-service.png",
  },
];


export const barChartData = [
  { name: "دماسنج", value: 32, color: "#61CE70" },
  { name: "دارو", value: 49.24, color: "#FF928A" },
  { name: "دارو", value: 58.29, color: "#406a91" },
  { name: "بالشت طبی", value: 60, color: "#2C7BF3" },
];

export const lineChartData = {
  labels: ["شهریور", "مرداد", "تیر", "خرداد", "اردیبهشت", "فروردین"],
  datasets: [
    {
      label: "بازرسی نوع اول",
      data: [120, 160, 130, 110, 180, 90],
      borderColor: "#355EB1",
      pointStyle: "circle",
      fill: false,
      borderWidth: 2,
      tension: 0.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: "#355EB1",
    },
    {
      label: "بازرسی نوع دوم",
      data: [100, 140, 170, 90, 150, 70],
      borderColor: "#2C7BF3",
      pointStyle: "circle",
      fill: false,
      borderWidth: 2,
      tension: 0.5,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: "#2C7BF3",
    },
  ],
};

export const productCards = new Array(5).fill({
  title: "شربت دیفین هیدرامین",
  translatedTitle: "Diphenhydramine Syrup",
  price: 1200000,
  rating: 4.5,
  remaining: 27,
  soldPercentage: 90,
  img: "/assets/home/Diphenhydramine-Syrup.jpg",
});