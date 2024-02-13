import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <main className="min-h-screen bg-slate-100 p-3 md:p-9 lg:p-24">
            <div className="container mx-auto h-full w-full">
                <div className="card md:card-side grid md:grid-cols-2 md:bg-slate-100 shadow-xl">
                    <div className="flex h-[425px] w-full">
                        <img
                            className="flex h-full w-full object-cover"
                            src="/o.jpg"
                            alt="Album"
                        />
                    </div>

                    <div className="card-body h-[425px] bg-white">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}
