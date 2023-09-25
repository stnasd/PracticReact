import { db } from "../firebase";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAuth } from "firebase/auth";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

export const apiFireBaseSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        ubdateHistory: builder.mutation({
            async queryFn(arg) {
                try {
                    const userRef = doc(db, "allusers", arg.email);
                    await updateDoc(userRef, {
                        history: arrayUnion(arg.newHistory),
                    });
                    return { data: "ok" };
                } catch (error) {
                    return { data: "error" };
                }
            },
        }),
        getInfoUser: builder.query({
            async queryFn(email) {
                try {
                    const docRef = doc(db, "allusers", email);
                    const user = await getDoc(docRef);
                    const res = user.data();
                    return { data: res };
                } catch (error) {
                    return { data: "error" };
                }
            },
        }),
        signout: builder.mutation({
            async queryFn() {
                try {
                    const auth = getAuth();
                    signOut(auth);
                    return { curentdata: "ok" };
                } catch (error) {
                    return { curentdata: "error" };
                }
            },
        }),
        login: builder.query({
            async queryFn(args) {
                try {
                    const auth = getAuth();
                    await signInWithEmailAndPassword(
                        auth,
                        args.email,
                        args.pass
                    );
                    return {
                        data: "ok",
                    };
                } catch (error) {
                    alert("Неправильные данные");
                    return { data: "error" };
                }
            },
        }),
        signup: builder.mutation({
            async queryFn(args) {
                try {
                    const auth = getAuth();
                    await createUserWithEmailAndPassword(
                        auth,
                        args.email,
                        args.pass
                    ).then((res) => {
                        setDoc(doc(db, "allusers", res.user.email), {
                            email: res.user.email,
                            history: [],
                            favorite: [],
                        });
                    });
                    return {
                        data: "ok",
                    };
                } catch (error) {
                    return { data: "error" };
                }
            },
        }),
    }),
});

export const {
    useLazyGetInfoUserQuery,
    useUbdateHistoryMutation,
    useSignoutMutation,
    useSignupMutation,
    useLazyLoginQuery,
} = apiFireBaseSlice;
