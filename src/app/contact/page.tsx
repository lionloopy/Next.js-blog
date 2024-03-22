import ConatctForm from "@/components/ConatctForm";
import { AiFillGithub, AiFillMail, AiFillWindows } from "react-icons/ai";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact Me',
  description: '연락하기'
}


const LINKS = [
  {icon: <AiFillGithub />, url:''},
  {icon: <AiFillMail />, url:''},
  {icon: <AiFillWindows />, url:''},
]
export default function ContactPage() {
    return (
      <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>abc@naver.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map((link, index )=> <a key={index} href={link.url} target="_blank" className="text-5xl hover:text-gray-400">
          {link.icon}
        </a>)}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ConatctForm/>
      </section>
    );
  }
  