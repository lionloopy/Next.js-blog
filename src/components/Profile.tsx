import Image from "next/image";
import profileImage from '../../public/images/KakaoTalk_20240304_101548281.png'
import Link from "next/link";

export default function Profile() {
  return (
    <section className="text-center">
      <Image 
      className="mx-auto rounded-full"
      src={profileImage} 
      alt="picture" 
      width={250} 
      height={250}
      priority
      />
      <h2 className="text-3xl font-bold mt-2">{"Hi, I'm YUNSEO"}</h2>
      <h3 className="text-xl font-semibold">Front-end Engineer</h3>
      <p>설명설명</p>
      <Link href='/contact'>
        <button className="bg-yellow-500 font-bold rounded-xl py-1 px-4 mt-2">Contact me</button>
      </Link>
    </section>
  )
}
