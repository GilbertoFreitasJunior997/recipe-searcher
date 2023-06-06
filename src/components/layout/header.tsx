import { Navbar } from "./navbar"


export const Header = () => {
    return (
        <header>
            <Navbar />
            <div className="h-24 md:h-44 bg-gradient-to-t from-gray-950 to-blue-950 flex items-center justify-center">
                <h1 className="text-lg md:text-4xl font-bold uppercase">Find <span className="pr-2 italic underline underline-offset-4"> ANY </span> recipe you want  </h1>
            </div>
        </header>
    )
}