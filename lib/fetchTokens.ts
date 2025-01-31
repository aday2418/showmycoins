import { Coin } from "@/types/Coin";

export default async function fetchTokens(userId: string, chain: string): Promise<Coin[]> {
    const res = await fetch(`https://deep-index.moralis.io/api/v2.2/${userId}/erc20?chain=${chain}`, {
        headers: {
            'X-API-Key': process.env.MORALIS_API_KEY!
        }
    })

    const data = await res.json();

    return data.map((item: any) => {
        return {...item, address: item.token_address }
    })
}