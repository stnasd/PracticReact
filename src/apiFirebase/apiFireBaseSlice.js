import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export const apiFireBaseSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        login: builder.query({
            async queryFn(args) {
                try {
                    const auth = getAuth()
                    await signInWithEmailAndPassword(auth,args.email,args.pass)
                    return {
                        data: 'ok'
                    }
                } catch (error) {
                    console.log(error)
                    return { data: 'error' }
                }
            },
            providesTags: ["User"],
        }),
        signup: builder.mutation({
            async queryFn(args) {
                try {
                    const auth = getAuth()
                    await createUserWithEmailAndPassword(auth, args.email, args.pass)
                    return {
                        data: 'ok'
                    }
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
    useLazyLoginQuery,
} = apiFireBaseSlice;
