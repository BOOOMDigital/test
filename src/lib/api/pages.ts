import axios from "../axios"

export const getPageSlugs = async () => {
    let url = `/api/v1/page-slugs`
 
    const data = await axios.get(url)
        .then((res:any) => res.data)
        .catch((err:any) => {
            console.log(err) 
            return err
        })

    return data
}

export const getPageBySlug = async (slug: string) => {
    let url = `/api/v1/page/${slug}`

    const {data} = await axios.get(url)
        .then((res:any) => res.data)
        .catch((err:any) => {
            console.log(err) 
            return err
        })

    return data
}