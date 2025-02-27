import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center h-screen px-6 text-center">
            <h2 className={`text-5xl font-bold mb-4 ${playfair.className}`}>Who me?</h2>
            <p className="max-w-lg text-xl">
                I&apos;m a Full-Stack Developer who loves turning ideas into reality.
                While others might find certain problems boring, I see them as challenges waiting to be solved.
                I enjoy building things that seem impossible, pushing the limits of creativity and code.
                Whether it&apos;s frontend magic or backend logic, I thrive on making things work seamlessly.
            </p>
        </div>
    );
}
