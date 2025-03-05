import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'], weight: ['400', '700'] });

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center md:h-screen h-vh text-center gap-5">
            <h2 className={`md:text-5xl mt-12 md:mt-0 text-3xl font-bold ${playfair.className}`}>Who me?</h2>
            <p className="max-w-3/6 md:text-2xl">
                I&apos;m a Full-Stack Developer who loves turning ideas into reality.
                While others might find certain problems boring, I see them as challenges waiting to be solved.
                I enjoy building things that seem impossible, pushing the limits of creativity and code.
                Whether it&apos;s frontend magic or backend logic, I thrive on making things work seamlessly.
            </p>
        </div>
    );
}
