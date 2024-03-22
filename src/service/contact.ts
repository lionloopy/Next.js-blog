import { EmailData } from "./email";

export async function sendContactEmail(email:EmailData) {
    // 우리 APi Route에 이메일 전송을 위한 요청을 보냄 (fetch)
    // 프론트엔드에서 api 요청을 보내기 위함
    const response = await fetch('/api/contact', {
        method:'POST',
        body:JSON.stringify(email),
        headers:{
            'Content-Type' : 'application/json'
        }
    })

    const data = await response.json()
    if(!response.ok) {
        console.log(Error)
        console.log(response)
        throw new Error('서버 요청 실패')
    }
    return data
}