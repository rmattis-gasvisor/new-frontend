'use client';

import {createClient} from "@/utils/supabase/client";
import {encodedRedirect} from "@/utils/utils";
import {redirect} from "next/navigation";

export default function LoginPage() {
    return <button onClick={signInAction}>Sign In</button>;
};

const signInAction = async () => {
    const email = 'robin.mattis@gasvisor.eu';
    const password = 'testtest123';
    const supabase = await createClient();

    const {error, data} = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    console.log(error);
    console.log(data?.user);
    console.log(data?.session);

    if (error) {
        return encodedRedirect("error", "/login", error.message);
    }

    return redirect("/dashboard");
};