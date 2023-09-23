import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export const apiFireBaseSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        signout: builder.mutation({
            async queryFn() {
                try {
                    const auth = getAuth();
                    signOut(auth)
                    return { curentdata: 'ok' }
                } catch (error) {
                    return { curentdata: 'error' }
                }
            },
            invalidatesTags: ['User']
        }),
        login: builder.query({
            async queryFn(args) {
                try {
                    const auth = getAuth()
                    await signInWithEmailAndPassword(auth, args.email, args.pass)
                    return {
                        data: 'ok'
                    }
                } catch (error) {
                    alert('Неправильные данные')
                    return { data: 'error' }
                }
            },
            invalidatesTags: ["User"]
        }),
        signup: builder.mutation({
            async queryFn(args) {
                try {
                    const auth = getAuth()
                    await createUserWithEmailAndPassword(auth, args.email, args.pass)
                        .then((res) => {
                            setDoc(doc(db, "allusers", res.user.email), {
                                email: res.user.email,
                                history: [],
                                favorite: []
                            })
                        })
                    return {
                        data: 'ok'
                    }
                } catch (error) {
                    return { data: 'error' }
                }
            },
        })
    })
})

export const {
    useSignoutMutation,
    useSignupMutation,
    useLazyLoginQuery,
} = apiFireBaseSlice;
