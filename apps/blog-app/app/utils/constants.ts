import Endpoints from './endpoints.constants'

export const TOP_URL = {
  title: 'webneko.dev',
  link: '/',
  placeholder: 'トップへ戻る',
}
export const COPYRIGHT_URL = {
  title: 'Copyright',
  link: 'https://github.com/nekohack',
  placeholder: '©︎ jiyuujin LAB. by ',
  category: 'custom',
}
export const RELATE_URL_LIST = [
  {
    title: 'nekohack.me',
    link: 'https://nekohack.me/',
    placeholder: '自身が代表を務める org のウェブサイト',
  },
  {
    title: 'Yuma Kitamura | nekohack.me',
    link: 'https://yuma-kitamura.nekohack.me/',
    placeholder: '自身のプロフィールサイト',
  },
]
export const CONTACT_URL = {
  title: 'Contact',
  link: 'https://nekohack.notion.site/jiyuujin-Yuma-Kitamura-c0a6b685fb524ca4823cc1dccbf2f9b8',
  placeholder: '問い合わせはこちら',
  category: 'custom',
}
export const SOCIAL_MENU_LIST = [
  {
    title: 'twitter',
    link: (slug: string) => `http://twitter.com/share?url=${Endpoints.BASE_URL}posts/${slug}`,
    placeholder: '',
    category: 'twitter',
  },
  {
    title: 'note',
    link: (slug: string) => `https://note.mu/intent/post?url=${Endpoints.BASE_URL}posts/${slug}`,
    placeholder: '',
    category: 'note',
  },
  {
    title: 'hatena',
    link: (slug: string) => `http://b.hatena.ne.jp/entry/webneko.dev/posts/${slug}`,
    placeholder: '',
    category: 'hatena',
  },
]
export const TWITTER_URL = (slug: string) =>
  `http://twitter.com/share?url=${Endpoints.BASE_URL}posts/${slug}`
export const HATENA_URL = (slug: string) => `http://b.hatena.ne.jp/entry/webneko.dev/posts/${slug}`
export const NOTE_URL = (slug: string) =>
  `https://note.mu/intent/post?url=${Endpoints.BASE_URL}posts/${slug}`
export const BUY_ME_A_COFFEE_URL = {
  title: 'Buy Me A Coffee',
  link: 'https://www.buymeacoffee.com/VqwL7dpxl',
  placeholder: 'Payment with Buy Me A Coffee.',
  category: 'buy-me-a-coffee',
}
export const STRIPE_URL = {
  title: 'Stripe',
  link: 'https://buy.stripe.com/3cs8xk7S55pxg2QdQQ',
  placeholder: 'Payment with Stripe.',
  category: 'stripe',
}
