import Tour1 from './images/tour-1.jpeg'
import Tour2 from './images/tour-2.jpeg'
import Tour3 from './images/tour-3.jpeg'
import Tour4 from './images/tour-4.jpeg'

export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 2, href: '#about', text: 'about' },
  { id: 3, href: '#services', text: 'services' },
  { id: 4, href: '#tour', text: 'tour' },
]

export const socialLinks = [
  { id: 1, href: 'https://www.facebook.com', icon: 'fab fa-facebook' },
  { id: 2, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: 'https://www.linkedin.com', icon: 'fab fa-linkedin' },
]

export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 1,
    icon: 'fas fa-tree fa-fw',
    title: 'endless hiking',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia. ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
  {
    id: 1,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfort',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.',
  },
]

export const tour = [
  {
    id: 1,
    image: Tour1,
    alt: 'china tour',
    date: 'august 26th, 2020',
    title: 'Tibet Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    location: 'China',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: Tour2,
    alt: 'china tour',
    date: 'august 26th, 2020',
    title: 'Tema Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    location: 'Ghana',
    duration: 6,
    cost: 2100,
  },
  {
    id: 3,
    image: Tour3,
    alt: 'china tour',
    date: 'august 26th, 2020',
    title: 'Obudu Ranch Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    location: 'Nigeria',
    duration: 5,
    cost: 3100,
  },
  {
    id: 4,
    image: Tour4,
    alt: 'china tour',
    date: 'august 26th, 2020',
    title: 'Big Ben Adventure',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod  exercitationem fugit, qui corporis.',
    icon: 'fas fa-map',
    location: 'England',
    duration: 5,
    cost: 4100,
  },
]
