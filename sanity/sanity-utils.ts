import { createClient, groq } from "next-sanity";
import { projectId,dataset,apiVersion } from "./env";

export async function getProjects(){
    const client = createClient({
        projectId,
        dataset,
        apiVersion
    });

    //Fetch everything from project schema
    return client.fetch(
        groq`*[_type = "project"]{
            _id,
            _createdAt,
            name,
            "slug":slug.current,
            "image": image.asset–>url,
            url,
            content
        }`

    )
}