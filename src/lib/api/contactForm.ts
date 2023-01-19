import axios from "../axios";

type ContactFormProps = {
    [key: string]: any
}

export const sendContactForm = async (data: ContactFormProps) => {
    const res = await axios.post('/api/v1/contact', data)
        .then((res) => res.data)
        .catch((err:any) => {
            console.error(err)
            return err
        }
    )

    return res
}
    