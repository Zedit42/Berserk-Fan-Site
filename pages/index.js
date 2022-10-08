import Head from 'next/head'
import Image from 'next/image'
import Berserk from '../components/Berserk';
import styles from "../styles/Home.module.css";
import Link from 'next/link';

export default function Home() {

  return (

    <div>
      <Head>
        <title>MyAnimeList</title>
      </Head>

      <div className=" h-screen max-h-screen bg-cover bg-[url('https://wallpapercave.com/wp/wp10138127.jpg')]">
      <div className=''>
        <Berserk />
        <div className=' text-white w-4/12 absolute bottom-1/3 left-40 '>
          <p className=''>Guts, a former mercenary now known as the <a href='/guts'>"Black Swordsman," </a> is out for <a href='/griffith'> revenge </a>. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings.
            Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his <a href='/love'> loved </a> one—of their humanity.
          </p>
          <h1 className=' text-2xl font-serif'>Get What You Want</h1>
        </div>
      </div>

      </div>
    </div>
  )
}
