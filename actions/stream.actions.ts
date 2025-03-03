'use server';

import {currentUser} from "@clerk/nextjs/server";
import {StreamClient} from "@stream-io/node-sdk";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STERAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await currentUser();
    if (!user) throw new Error('User is not authenticated');

    if (!apiKey || !apiSecret) throw new Error('Stream API key or secret is not provided');

    const client =   new StreamClient(apiKey, apiSecret);
    const exp = Math.round(new Date().getTime() / 1000) + 60 * 60 * 5;
    const issued = Math.floor(Date.now() / 1000) - 60;
    return client.createToken(user.id, exp, issued);
}