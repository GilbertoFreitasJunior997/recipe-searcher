import { FC, PropsWithChildren } from "react";
import { Header } from "./header";

export const Layout: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <div className="flex flex-col w-full min-h-screen">
            <Header />

            <main className="flex-grow bg-gray-950 px-32 py-5">
                {children}
            </main>
        </div>
    )
}