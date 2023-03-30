import { createClient } from 'next-sanity';

const sanityClient = createClient({
    projectId: "82g5arxf",
    dataset: "production",
    apiVersion: "2023-03-29",
    useCdn: false
});

export default sanityClient;