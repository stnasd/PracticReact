import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";


export const apiFireBaseSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        signup: builder.mutation({
            async queryfn(args) {
                try {
                    const auth = getAuth()
                    await createUserWithEmailAndPassword(auth, args.email, args.pass)
                        .then((userCredential) => {
                            const user = userCredential.user;
                            setDoc(doc(db, "Users"), {
                                ...user
                            });
                            return {
                                data: user
                            }
                        })
                } catch (error) {
                    return { data: 'error' }
                }
            },
            providesTags: ["User"],
        })
    })
})
export const {
    useSignupMutation,
} = apiFireBaseSlice;



