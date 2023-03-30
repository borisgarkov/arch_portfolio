import { useState } from "react"

export default function useHomeData({ data }) {
    const [homeData, setHomeData] = useState(data);

    return homeData;
};