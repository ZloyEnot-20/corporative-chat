import { GiSpikedDragonHead, GiVineWhip, GiAlliedStar } from 'react-icons/gi';

export const data = [
  {
    text: 'Привет народ, как насчет того чтобы собраться вместе где нибудь в эту пятницу вечером?',
    user: 'Стас',
    time: '22:17',
    edited: false,
    mine: false,
    replied: '',
    id: 43241,
  },
  {
    text: 'Я за было бы клево!',
    user: 'Женя',
    time: '22:18',
    edited: false,
    mine: false,
    replied:
      'Стас: Привет народ, как насчет того чтобы собраться вместе где нибудь в эту пятницу вечером?',
    id: 43221,
  },
  {
    text: `Давайте тогда часиков в 8, мне нужно кое что урегулировать дома`,
    user: 'Тимур',
    time: '22:23',
    edited: false,
    mine: false,
    replied: '',
    id: 41241,
  },
  {
    text: 'Ок тогда договорились',
    user: 'Стас',
    time: '22:17',
    edited: false,
    mine: false,
    replied: '',
    id: 13241,
  },
  {
    text: 'Завтра я сообщу остальным коллегам если вдруг тут не увидят',
    user: 'Стас',
    time: '22:17',
    edited: false,
    mine: false,
    replied: '',
    id: 42241,
  },
  {
    text: 'У нас же Стас сотрудник месяца, уронил прод в две строки кода😂, вот и отметим это',
    user: 'Олег',
    time: '22:17',
    edited: true,
    mine: true,
    replied: '',
    id: 12341,
  },
  {
    text: 'Не забудь сеньора помидора позвать, он душа компании)',
    user: 'Олег',
    time: '22:17',
    edited: false,
    mine: true,
    replied:
      'Стас: Завтра я сообщу остальным коллегам если вдруг тут не увидят',
    id: 43111,
  },
];

export const usersData = {
  me: {
    name: 'Олег',
    occupation: 'FrontEnd developer',
  },
  all: [
    {
      name: 'Тимур',
      occupation: 'QA Engineer',
    },
    {
      name: 'Стас',
      occupation: 'Project manager',
    },
    {
      name: 'Женя',
      occupation: 'Backend Developer',
    },
  ],
};

export const tabsData = [
  {
    icon: <GiSpikedDragonHead size="20px" />,
    left: '0',
    background: 'rgb(96, 212, 80)',
  },
  {
    icon: <GiVineWhip size="20px" />,
    left: `-${100 / 3}%`,
    background: 'rgb(76, 49, 153)',
  },
  {
    icon: <GiAlliedStar size="20px" />,
    left: `-${(100 / 3) * 2}%`,
    background: 'rgb(86, 211, 124)',
  },
];

export const ratingData = [
  { user: 'Олег', likes: 122, liked: false, leader: true },
  { user: 'Сергей', likes: 122, liked: false, leader: false },
  { user: 'Виталий', likes: 73, liked: false, leader: false },
  { user: 'Дима', likes: 55, liked: false, leader: false },
];
