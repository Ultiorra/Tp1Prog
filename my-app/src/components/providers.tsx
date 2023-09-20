"use client";

import { NextFont } from "next/dist/compiled/@next/font";
import { MantineCustomThemeProvider } from "tp-kit/components";

type Props = {font : NextFont, children : React.ReactNode}
export default function ProductList({font, children} : Props) {  
    return (<main>
        <MantineCustomThemeProvider
            font={font}
        >
            {children}
        </MantineCustomThemeProvider>
    </main>
)}