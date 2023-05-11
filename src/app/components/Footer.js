import Link from 'next/link';

import { MapPinIcon, PhoneIcon, WrenchIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

const data = [
  {
    "groupId": "01",
    "groupName": "О компании",
    "groupLink": "/about/",
    "items": [
      {
        "itemId": "101",
        "itemName": "История",
        "itemLink": "/about/"
      },
      {
        "itemId": "102",
        "itemName": "Награды",
        "itemLink": "/about/awards/"
      },
      {
        "itemId": "103",
        "itemName": "Контакты",
        "itemLink": "/support/contacts/"
      },
      {
        "itemId": "104",
        "itemName": "Карьера в STURM",
        "itemLink": "/about/career/"
      },
      {
        "itemId": "105",
        "itemName": "Бутики",
        "itemLink": "/support/pickup/"
      },
      {
        "itemId": "106",
        "itemName": "Официальные дилеры",
        "itemLink": "/support/dealers/"
      }
    ]
  },
  {
    "groupId": "02",
    "groupName": "Поддержка",
    "groupLink": "/support/",
    "items": [
      {
        "itemId": "201",
        "itemName": "Сервисные центры",
        "itemLink": "/"
      },
      {
        "itemId": "202",
        "itemName": "Оплата",
        "itemLink": "/"
      },
      {
        "itemId": "203",
        "itemName": "Доставка",
        "itemLink": "/"
      },
      {
        "itemId": "204",
        "itemName": "Обмен и возврат",
        "itemLink": "/"
      },
      {
        "itemId": "205",
        "itemName": "Франчайзинг",
        "itemLink": "/"
      },
    ]
  },
  {
    "groupId": "03",
    "groupName": "Рецепты",
    "groupLink": "/recipes/",
    "items": [
      {
        "itemId": "301",
        "itemName": "Первые блюда",
        "itemLink": "/"
      },
      {
        "itemId": "302",
        "itemName": "Мясо",
        "itemLink": "/"
      },
      {
        "itemId": "303",
        "itemName": "Рыба",
        "itemLink": "/"
      },
      {
        "itemId": "304",
        "itemName": "Птица",
        "itemLink": "/"
      },
      {
        "itemId": "305",
        "itemName": "Гарниры и закуски",
        "itemLink": "/"
      },
      {
        "itemId": "306",
        "itemName": "Выпечка и десерты",
        "itemLink": "/"
      }
    ]
  },
  {
    "groupId": "04",
    "groupName": "Интернет-бутик",
    "groupLink": "/",
    "items": [
      {
        "itemId": "401",
        "itemName": "Кухня",
        "itemLink": "/"
      },
      {
        "itemId": "402",
        "itemName": "Дом и климат",
        "itemLink": "/"
      },
      {
        "itemId": "403",
        "itemName": "Красота и здоровье",
        "itemLink": "/"
      },
      {
        "itemId": "404",
        "itemName": "Аксессуары",
        "itemLink": "/"
      },
      {
        "itemId": "405",
        "itemName": "Советы по выбору",
        "itemLink": "/"
      },
      {
        "itemId": "406",
        "itemName": "Архив",
        "itemLink": "/"
      }
    ]
  },
  {
    "groupId": "05",
    "groupName": "Популярное",
    "groupLink": "/eShop/kitchen/",
    "items": [
      {
        "itemId": "501",
        "itemName": "Чайники",
        "itemLink": "/"
      },
      {
        "itemId": "502",
        "itemName": "Воздухоочистители",
        "itemLink": "/"
      },
      {
        "itemId": "503",
        "itemName": "Соковыжиматели",
        "itemLink": "/"
      },
      {
        "itemId": "504",
        "itemName": "Кофемашины",
        "itemLink": "/"
      },
      {
        "itemId": "505",
        "itemName": "Блендеры",
        "itemLink": "/"
      },
      {
        "itemId": "506",
        "itemName": "Пылесосы",
        "itemLink": "/"
      }
    ]
  }
];

const FooterLinks = data.map((obj) => {
  return (
    <div>
      <Link className="text-[#c8a16e] text-lg hover:text-inherit transition-colors duration-500" href={obj.groupLink} key={obj.groupId}>
        {obj.groupName}
      </Link>
      <ul className="space-y-3 pt-4" key={obj.groupId}>
        {obj.items?.map((item) => {
          return (
            <li className="hover:text-white transition-colors duration-500" key={item.itemId}>
              <Link href={item.itemLink}>
                {item.itemName}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
})

const Footer = () => {
  return (
    <footer className="w-full bg-[#1f1f21]">
      <div className="flex flex-wrap gap-5 justify-center items-center w-full py-[40px] px-10 text-center font-extralight">
        <Link className="relative flex flex-col justify-center items-center overflow-hidden w-[150px] h-[85px] bg-[#454449] rounded-xl hover:brightness-75" href="/support/pickup/">
          <MapPinIcon className="w-10 h-10 stroke-[0.5]"/>
          <p className="uppercase text-xs mt-3">Бутики</p>
        </Link>
        <Link className="relative flex flex-col justify-center items-center overflow-hidden w-[150px] h-[85px] bg-[#454449] rounded-xl hover:brightness-75" href="/support/hotline/">
          <PhoneIcon className="w-10 h-10 stroke-[0.5]" />
          <p className="uppercase text-xs  mt-3">Служба заботы</p>
        </Link>
        <Link className="relative flex flex-col justify-center items-center overflow-hidden w-[150px] h-[85px] bg-[#454449] rounded-xl hover:brightness-75" href="/support/">
          <WrenchIcon className="w-10 h-10 stroke-[0.5]" />
          <p className="uppercase text-xs mt-3">Сервис</p>
        </Link>
        <Link className="relative flex flex-col justify-center items-center overflow-hidden w-[150px] h-[85px] bg-[#454449] rounded-xl hover:brightness-75" href="/recipes/">
          <PaintBrushIcon className="w-10 h-10 stroke-[0.5]" />
          <p className="uppercase text-xs mt-3">Рецепты</p>
        </Link>
      </div>


      <nav className="flex flex-row flex-wrap justify-between gap-10 p-10 text-sm">
        {FooterLinks}
      </nav>

      <div className="pt-[50px] text-center">
        <div className="flex justify-center items-center relative w-[190px] my-0 mx-auto space-x-10">
          <Link className="flex justify-center w-5 h-5 hover:text-white transition-colors duration-500" href="/" rel="nofollow noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 20 17">
              <path d="M15.18 16.86c1.2.52 1.65-.57 1.65-.57L20 .61c-.02-1.06-1.47-.42-1.47-.42L.78 7.05s-.85.3-.78.81c.08.52.75.76.75.76l4.47 1.48 1.62 5.19c.25.8.48.83.48.83.25.1.47-.07.47-.07l2.9-2.58 4.5 3.39Zm1.18-13.7s.65-.37.63 0c0 0 .1.06-.24.41-.3.3-7.65 6.75-8.63 7.61a.27.27 0 0 0-.13.23l-.29 2.38c-.05.26-.38.28-.46.05l-1.22-3.9a.37.37 0 0 1 .15-.43l10.2-6.34Z" />
            </svg>
          </Link>
          <Link className="flex justify-center w-5 h-5 hover:text-white transition-colors duration-500" href="/" rel="nofollow noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 18 15">
              <path d="M14.72 1.11c-2.71-.2-8.73-.2-11.44 0C.36 1.31.01 3.15 0 7.96c.02 4.82.36 6.66 3.3 6.86 2.7.2 8.72.2 11.43 0 2.92-.2 3.27-2.04 3.29-6.86-.02-4.8-.36-6.64-3.3-6.85ZM7 10.98v-6l5.5 3-5.5 3Z" />
            </svg>
          </Link>
          <Link className="flex justify-center w-5 h-5 hover:text-white transition-colors duration-500" href="/" rel="nofollow noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" strokeWidth="0.5" viewBox="0 0 21 12">
              <path d="M9.87 11.96h1.2s.36-.04.55-.24c.17-.19.16-.53.16-.53s-.02-1.61.73-1.85c.73-.23 1.68 1.56 2.68 2.25.76.52 1.33.4 1.33.4l2.68-.03s1.4-.1.74-1.2c-.05-.08-.39-.81-2-2.3-1.67-1.57-1.45-1.31.58-4.01 1.23-1.65 1.72-2.66 1.57-3.08-.15-.42-1.05-.3-1.05-.3l-3.02.01s-.23-.03-.4.07c-.15.1-.26.33-.26.33s-.48 1.27-1.11 2.35c-1.35 2.29-1.88 2.4-2.1 2.26-.52-.33-.39-1.32-.39-2.03 0-2.22.34-3.14-.65-3.38A5.17 5.17 0 0 0 9.7.54C8.62.53 7.72.54 7.2.8c-.35.17-.61.54-.45.56.2.03.65.12.9.45.3.42.29 1.37.29 1.37s.18 2.6-.41 2.93c-.41.22-.97-.23-2.17-2.3a21 21 0 0 1-1.08-2.24s-.08-.22-.24-.34c-.2-.14-.47-.19-.47-.19l-2.86.02s-.43.01-.6.2c-.13.17 0 .51 0 .51S2.35 7.04 4.89 9.7c2.33 2.43 4.98 2.27 4.98 2.27h0Z" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex flex-col w-full my-0 mx-auto">
        <div className="px-10 pt-[34px] pb-[10px] order-5 text-center text-xs   tracking-widest">
          <span>
            © {new Date().getFullYear()} STURM — официальный интернет-магазин. Все права защищены.
          </span>
          <p className="">
            <Link className="hover:text-white transition-colors duration-500"
              href="#">
              Политика в области обработки персональных данных.
            </Link>
            <Link className="hover:text-white transition-colors duration-500 ml-[5px]"
              href="#">
              Публичный Договор оферты.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer