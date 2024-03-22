import Profile from "@/components/Profile";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'About Me',
  description: '커리어 소개'
}

export default function AboutPage() {
    return (
      <>
      <Profile/>
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 my-2">Who Am I?</h2>
        <p>개발자</p>
        <h2 className="text-2xl font-bold text-gray-800 my-2">Career</h2>
        <p>경력</p>
        <p>경력</p>
        <h2 className="text-2xl font-bold text-gray-800 my-2">Skills</h2>
        <p>스킬</p>
        <p>스킬</p>
      </section>
      </>
    );
  }
  