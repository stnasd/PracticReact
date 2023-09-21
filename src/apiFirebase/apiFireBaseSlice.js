import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from "../firebase";
import { doc, setDoc, onSnapshot } from "firebase/firestore";

export const apiFireBaseSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        logOutUser: builder.mutation({
            async queryFn() {
                try {
                    setDoc(doc(db, "userOnline", "user"), {
                        email: '',
                        online: false,
                    })
                    return { data: 'ok' }
                } catch (error) {
                    return { data: 'error' }
                }
            },
            invalidatesTags: ['User']
        }),
        getOnlineUser: builder.query({
            async queryFn() {
                try {
                    return {
                        data: new Promise((resolve, reject) => {
                            onSnapshot(doc(db, "userOnline", "user"), (doc) => {
                                console.log("Current data: ", doc.data());
                                resolve(doc.data())
                            });
                        })
                    }
                } catch (error) {
                    return { data: 'error' }
                }
            },
            providesTags: ['User']
        }),
        login: builder.query({
            async queryFn(args) {
                try {
                    const auth = getAuth()
                    await signInWithEmailAndPassword(auth, args.email, args.pass)
                    setDoc(doc(db, "userOnline", "user"), {
                        email: args.email,
                        online: true,
                    })
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
    useLogOutUserMutation,
    useGetOnlineUserQuery,
    useSignupMutation,
    useLazyLoginQuery,
} = apiFireBaseSlice;
