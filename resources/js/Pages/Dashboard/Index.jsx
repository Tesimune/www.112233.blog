import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TweetTopic from "./Components/TweetTopic";

export default function Dashboard({ auth, authURL, topics, comments }) {
    const user = auth.user;
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-6">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center bg-white shadow-sm sm:rounded-lg p-3">
                        <div className="text-gray-900">You're logged in!</div>
                        <TweetTopic
                            user={user}
                            authURL={authURL}
                            topics={topics}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center p-3 md:p-8">
                        {comments.length ? (
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {comments.map((comment) => (
                                    <div
                                        key={comment.id}
                                        className="bg-white rounded-md shadow-md p-4"
                                    >
                                        <div className="flex items-center space-x-4 mb-2">
                                            <div className="h-8 w-8 rounded-full ring-2 ring-primary">
                                                <img
                                                    src={user.avatar}
                                                    className="h-full w-full rounded-full"
                                                    alt="User Avatar"
                                                />
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-semibold text-gray-900">
                                                    {user.name}
                                                </span>
                                                <span className="text-gray-500">
                                                    @{user.username}
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-gray-800 mb-4">
                                            {comment.tweet.text}
                                        </p>
                                        <div className="bg-gray-100 p-4 rounded-md">
                                            <span className="text-gray-900">
                                                {comment.commentPost}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-white rounded-md shadow-md p-4">
                                <span className="text-gray-900 block mb-4">
                                    Welcome to xBot! To get started, please
                                    grant xBot read and write access by clicking
                                    on the xBot button on the top right corner
                                    and selecting "Grant Access".
                                </span>
                                <span className="text-gray-900 block mb-4">
                                    To add a topic, click on the same xBot
                                    button and select "Tweet Topic".
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
