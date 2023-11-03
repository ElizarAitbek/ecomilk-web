import {
  Biokefir,
  Butter,
  CondensedMilk,
  Curd,
  Kefir,
  Milk,
  ProcessedChocolateCheese,
  SourCream,
  Strawberry,
  Smetana,
  ProcessedCheese,
  BlueKefir,
  CurdChocolate,
  CurdKiwi,
  CurdStrawberry,
  MiniCondensedMilk,
} from "../assets/index.js"

export const cardItems = [
  {
    id: 1,
    title: "Молоко",
    width: "240px",
    height: "400.9px",
    colorCard: "#B49FC3",
    image: Milk,
  },
  {
    id: 2,
    title: "БИО Кефиры",
    width: "240px",
    height: "400.9px",
    colorCard: "#B5CB07",
    image: Biokefir,
  },
  {
    id: 3,
    title: "Масло",
    width: "260px",
    height: "350.9px",
    colorCard: "#D2AF4A",
    image: Butter,
  },
  {
    id: 4,
    title: "Каймак",
    width: "290px",
    height: "220px",
    colorCard: "#A5BADD",
    image: SourCream,
  },
  {
    id: 5,
    title: "Сыр",
    width: "320px",
    height: "240px",
    colorCard: "#9E672D",
    image: ProcessedChocolateCheese,
  },
  {
    id: 6,
    title: "Кефир",
    width: "260px",
    height: "390.9px",
    colorCard: "#F59F9F",
    image: Kefir,
  },
  {
    id: 7,
    title: "Творожный десерт",
    width: "302px",
    height: "303px",
    colorCard: "#4D6895",
    image: Curd,
  },
  {
    id: 8,
    title: "Сгущённое молоко",
    width: "410px",
    height: "410px",
    colorCard: "#37A1C5",
    image: CondensedMilk,
  },
]

export const catalogItem = [
  {
    id: 1,
    name: "Молоко",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5% и 3,2%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Молоко 2,5",
        width: "240px",
        height: "400.9px",
        image: Milk,
        colorCard: "#B49FC3",
      },
      {
        id: 2,
        titlePercent: "Молоко 3,2",
        width: "240px",
        height: "400.9px",
        image: Milk,
        colorCard: "#B49FC3",
      },
    ],
  },

  {
    id: 2,
    name: "БИО Кефиры",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Биованиль 2,5%",
        width: "240px",
        height: "400.9px",
        image: Biokefir,
        colorCard: "#B5CB07",
      },
      {
        id: 2,
        titlePercent: "Био Клубника 2,5%",
        width: "740px",
        height: "700.9px",
        image: Strawberry,
        colorCard: "#F2A998",
      },
    ],
  },
  {
    id: 3,
    name: "Масло",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Масло",
        width: "260px",
        height: "350.9px",
        image: Butter,
        colorCard: "#D2AF4A",
      },
    ],
  },
  {
    id: 4,
    name: "Каймак",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Каймак",
        width: "270px",
        height: "220.9px",
        image: SourCream,
        colorCard: "#A5BADD",
      },
      {
        id: 2,
        titlePercent: "Каймак",
        width: "240px",
        height: "300px",
        image: Smetana,
        colorCard: "#8ABF68",
      },
    ],
  },
  {
    id: 5,
    name: "Сыр",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Сыр Ванильный",
        width: "310px",
        height: "240px",
        image: ProcessedCheese,
        colorCard: "#E8A180",
      },
      {
        id: 2,
        titlePercent: "Сыр Шоколадный",
        width: "290px",
        height: "220px",
        image: ProcessedChocolateCheese,
        colorCard: "#9E672D",
      },
    ],
  },
  {
    id: 6,
    name: "Кефир",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Кефир полезный",
        width: "260px",
        height: "390.9px",
        image: Kefir,
        colorCard: "#F59F9F",
      },
      {
        id: 2,
        titlePercent: "Кефир кисломолочный",
        width: "260px",
        height: "390.9px",
        image: BlueKefir,
        colorCard: "#1D80BB",
      },
    ],
  },
  {
    id: 7,
    name: "Творожный десерт",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Творожный десерт со вкусом Киви",
        width: "302px",
        height: "303px",
        image: CurdKiwi,
        colorCard: "#7DBA00",
      },
      {
        id: 2,
        titlePercent: "Творожный десерт со вкусом Клубники",
        width: "302px",
        height: "303px",
        image: CurdStrawberry,
        colorCard: "#D94F00",
      },
      {
        id: 3,
        titlePercent: "Творожный десертсо вкусом Шоколада",
        width: "302px",
        height: "303px",
        image: CurdChocolate,
        colorCard: "#52291C",
      },
      {
        id: 4,
        titlePercent: "Творожный десерт со вкусом Изюма",
        width: "302px",
        height: "303px",
        image: Curd,
        colorCard: "#08338F",
      },
    ],
  },
  {
    id: 8,
    name: "Сгущённое молоко",
    packageName: "Пюр-Пак",
    fatPercentage: "2,5%",
    day: "7 cуток",
    liter: "1 литр",
    additionalImg: [
      {
        id: 1,
        titlePercent: "Сгущенное молоко",
        width: "420px",
        height: "420px",
        image: CondensedMilk,
        colorCard: "#A5BADD",
      },
      {
        id: 2,
        titlePercent: "Сгущенное молоко",
        width: "400px",
        height: "290px",
        image: MiniCondensedMilk,
        colorCard: "#8ABF68",
      },
    ],
  },
]
