import { allPosts } from "@contentlayer/generated"
import { redirect } from "next/navigation";
import { userMetadata } from "src/lib/auth";

export default async function User() {
    let user = await userMetadata()
    const posts = await allPosts

    if(!user) {
        redirect("/")
    }

    return (
        <div className="flex flex-col gap-6">
            <div className="flex justify-center pt-10">
                <div className="flex flex-col gap-4 justify-items-center">
                    <div className="flex gap-4 items-center justify-center">
                        <img className="rounded-full" src={user.avatarUrl} width={100} height={100} alt="user avatar" />
                    </div>
                    <div className="text-2xl justify-center">
                        <div className="text-center">{user.name}</div>
                    </div>
                    <div className="text-lg text-center">{user.email}</div>
                </div>
            </div>
            <hr className="text-center" />
            <div>
                <p className="text-2xl">
                    My Exercises (Coming Soon)
                </p>
                <div>
                    {posts.map((post) => (
                        <div key={post._id}>
                            <h2>{post.title}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
