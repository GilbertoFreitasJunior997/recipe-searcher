import { FormEvent, useCallback, useState } from "react"
import { TextInput } from "../text-input"
import { getRecipes } from "../../api/service"
import { useRecipes } from "../../store/use-recipes";

export const SearchBar = () => {
    const [searchValue, setSeachValue] = useState('');
    const { setLoading, setRecipes } = useRecipes(useCallback(s => ({ setRecipes: s.setRecipes, setLoading: s.setLoading }), []));

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            setLoading(true)
            const data = await getRecipes(searchValue)
            setRecipes(data.hits);
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSearch} className="w-full flex items-center justify-center">
            <div className="w-1/2 flex items-end justify-center gap-3">
                <TextInput placeholder="eg. Chicken" label="Search" value={searchValue} onChange={setSeachValue} />
                <button
                    type='submit'
                    className="rounded bg-gray-800 px-2 py-[5px] hover:bg-gray-900 active:bg-gray-950 transition-colors">
                    Search
                </button>
            </div>
        </form>
    )
}