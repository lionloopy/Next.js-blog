
'use client'
import React, { ChangeEvent, FormEvent } from "react"
import Banner, { BannerData } from "./Banner"
import { sendContactEmail } from "@/service/contact";

type Form = {
    from:string;
    subject:string;
    message:string;
}

const DEFAULT_DATA = {
    from:'',
    subject:'',
    message:''
}
export default function ConatctForm() {
    const [form, setForm] = React.useState<Form>(DEFAULT_DATA)
    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target
        setForm(prev => ({...prev, [name]:value}))
    }
    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        sendContactEmail(form)
        .then(() => {
            setBanner({message:'메일 발송 성공!', state:'success'})
            setForm(DEFAULT_DATA)
        })
        .catch((error) => {
            console.log('여기?')
            console.log(error)
            setBanner({message:'메일 발송 실패!', state:'error'})
        }).finally(()=>{
            setTimeout(() => {setBanner(null)}, 3000)
        })
        
        
    }
    const [banner, setBanner] = React.useState<BannerData | null>(null)
  return (
    <>
    {banner && <Banner banner={banner}/>}
    <form onSubmit={onSubmit} className="w-full max-w-md flex flex-col gap-2 m-4 p-4 bg-slate-700 rounded-xl">
        <label htmlFor="from" className="font-semibold">Your Email</label>
        <input type='email' id="from" name="from" required autoFocus value={form.from} onChange={onChange}/>
        <label htmlFor="subject" className="font-semibold ">Subject</label>
        <input type='subject' id="subject" name="subject" className=" text-black" required autoFocus value={form.subject} onChange={onChange}/>
        <label htmlFor="body" className="font-semibold">Message</label>
        <textarea id="message" name="message" required autoFocus value={form.message} onChange={onChange} rows={10} className="text-black"/>
        <button className="font-semibold bg-yellow-300 text-black">submit</button>
    </form>
    </>
  )
}
