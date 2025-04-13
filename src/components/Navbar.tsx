import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky w-full font-mono text-4xl">
            <nav className="justify-self-center">
                <Link className="m-20" href="/">Home</Link>
                <Link className="m-20" href="/about">About</Link>
                <Link className="m-20" href="/blog/4">Blog Post</Link>
            </nav>
        </header>
    );
}