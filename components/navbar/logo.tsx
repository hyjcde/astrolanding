import Image from 'next/image';
import { Flex } from '../styles/flex';

export const AcmeLogo = () => {
   return (
      <Flex 
         align="center" 
         css={{ gap: '$6' }}
      >
         
         <Image
            src="/images/cuhk.png"
            alt="CUHK Logo"
            width={40}
            height={40}
            style={{
               objectFit: 'contain'
            }}
            priority={true}
            quality={100}
         />
         <Image
            src="/images/usr.png"
            alt="USR Logo"
            width={40}
            height={40}
            style={{
               objectFit: 'contain'
            }}
            priority={true}
            quality={100}
         />
      </Flex>
   );
};

export const TeamMembers = {
   DuanQigeng: {
      name: 'Duan Qigeng',
      pinyin: 'duan qigeng',
      role: 'System Lead',
      bio: 'System Design / Perception Research',
      avatar: '/avatars/duanqigeng.jpg'
   },
   XiaFeihuang: {
      name: 'Xia Feihuang',
      pinyin: 'xia feihuang', 
      role: 'Theoretical Scientist',
      bio: 'Theoretical Research',
      avatar: '/avatars/xiafeihuang.jpg'
   },
   DaWan: {
      name: 'Da Wan',
      pinyin: 'dawan',
      role: 'Mechanical Designer', 
      bio: 'Mechanical System Design',
      avatar: '/avatars/dawan.jpg'
   },
   HuangYijun: {
      name: 'Huang Yijun',
      pinyin: 'huang yijun',
      role: 'Software Lead',
      bio: 'Software Systems Architecture',
      avatar: '/avatars/huangyijun.jpg'
   },
   /* 暂时注释掉 LiuXuChen 的信息
   LiuXuChen: {
      name: 'X. Liu',
      pinyin: 'liu xuchen',
      role: 'Control Researcher',
      bio: 'Control Systems Research',
      avatar: '/avatars/liuxuchen.jpg'
   },
   */
   ZhaoBenYun: {
      name: 'Zhao Benyun',
      pinyin: 'benyun zhao',
      role: 'AI Researcher',
      bio: 'Artificial Intelligence Research',
      avatar: '/avatars/zhaobenyun.jpg'
   },
   YeRen: {
      name: 'Ye Ren',
      pinyin: 'ye ren',
      role: 'Mechanical Designer',
      bio: 'Mechanical System Design',
      avatar: '/avatars/yeren.jpg'
   }
};
