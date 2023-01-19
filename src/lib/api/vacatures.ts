import axios from "../axios";

export const getFilteredVacatures = async (data:any) => {
    const res = await axios.post('/api/v1/vacatures', data)
        .then((res) => res.data)
        .catch((err:any) => {
            return err
        }
    )

    return res
}
    