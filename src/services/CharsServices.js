import { useHttp } from "../components/hooks/http.hook"


const useCharService = () => {
    const { request } = useHttp();
    const _apiBase = 'https://rickandmortyapi.com/api/character';



    const getAllCharacters = async () => {
        const res = await request(_apiBase)
        return res
    }


    return {
        getAllCharacters
    }
}



export default useCharService;