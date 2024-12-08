import { Svg } from '../styles/svg';

export const AcmeLogo = () => {
   return (
      <Svg
         width={40}
         height={40}
         css={{
            '& path': {
               fill: '$accents9',
            },
         }}
         viewBox="0 0 32 32"
      >
         <g>
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32ZM15.4397 6.90942C15.7872 6.65031 16.2128 6.65031 16.5603 6.90942L24.5603 12.9094C24.8426 13.1223 25 13.4516 25 13.8V20.2C25 20.5484 24.8426 20.8777 24.5603 21.0906L16.5603 27.0906C16.2128 27.3497 15.7872 27.3497 15.4397 27.0906L7.43975 21.0906C7.15744 20.8777 7 20.5484 7 20.2V13.8C7 13.4516 7.15744 13.1223 7.43975 12.9094L15.4397 6.90942ZM16 8.80902L9 14.0451V19.9549L16 25.191L23 19.9549V14.0451L16 8.80902Z"
            />
            <path
               fillRule="evenodd"
               clipRule="evenodd"
               d="M16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16Z"
            />
         </g>
      </Svg>
   );
};

export const TeamMembers = {
   DuanQiGeng: {
      name: 'Duan Qigeng',
      pinyin: 'duan qi geng',
      role: 'Chief Technology Officer',
      bio: 'Research on autonomous systems'
   },
   YeRen: {
      name: 'Ye Ren',
      pinyin: 'ye ren',
      role: 'Lead Engineer',
      bio: 'Research on SLAM'
   },
   HuangYiJun: {
      name: 'Huang Yijun',
      pinyin: 'huang yi jun',
      role: 'Software Engineer',
      bio: 'Full-stack development'
   },
   QiXing: {
      name: 'Qi Xing',
      pinyin: 'qi xing',
      role: 'Research Director',
      bio: 'Research on robotics'
   },
   DaWan: {
      name: 'Da Wan',
      pinyin: 'da wan',
      role: 'Software Engineer',
      bio: 'Backend development'
   },
   LiuXuChen: {
      name: 'X. Liu',
      pinyin: 'liu xu chen',
      role: 'Hardware Engineer',
      bio: 'Hardware development'
   }
};