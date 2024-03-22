import { sendEmail } from '@/service/email'
import * as yup from 'yup'
const bodySchema = yup.object().shape({
    from:yup.string().email().required(),
    subject: yup.string().required(),
    message:yup.string().required()
})

//서버에서 실행됨
export async function POST(request:Request) {
    const body = await request.json()
    if(!bodySchema.isValidSync(body)){
        return new Response(JSON.stringify({message:'유효하지 않음'}), {status:400})
    }
    const {from, subject, message} = body
    // 노드 메일러를 이용해서 메일을 전송하면 됨
    return sendEmail(body)
    .then(() => new Response(JSON.stringify({message:'메일 발송 성공'}), {status:200}))
    .catch(error => {
        console.log(error)
        console.log('여기?')
        return new Response(JSON.stringify({message:'메일 발송 실패'}), {status:500})
    })
}