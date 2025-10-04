import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
    const router = useRouter();

    useEffect(() => {
        // yaha redirect karna hai
        router.replace("/"); // home par bhej do
    }, [router]);

    return null; // kuch render mat karo
}
