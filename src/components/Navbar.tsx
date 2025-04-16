import Link from "next/link";

export default function Navbar() {
    return (
        <header className="sticky w-full text-4xl">
            <nav className="justify-self-center flex items-center gap-2">
                <Link className="m-20 text-xs leading-3" href="/"><pre>
                &nbsp;_   _                      <br/>
                | | | | ___  _ __ ___   ___ <br/>
                | |_| |/ _ \| '_ ` _ \ / _ \<br/>
                |  _  | (_) | | | | | |  __/<br/>
                |_| |_|\___/|_| |_| |_|\___|
                </pre></Link>
                <Link className="m-20 text-xs leading-3" href="/about"><pre>
                &nbsp;&nbsp;&nbsp;&nbsp;_    _                 _   <br/>
                &nbsp;&nbsp;&nbsp;/ \  | |__   ___  _   _| |_ <br/>
                &nbsp;&nbsp;/ _ \ | '_ \ / _ \| | | | __|<br/>
                &nbsp;/ ___ \| |_) | (_) | |_| | |_ <br/>
                /_/   \_\_.__/ \___/ \__,_|\__|
                </pre></Link>
                <Link className="m-20 text-xs leading-3" href="/blog/4"><pre>
                &nbsp;____  _             <br/>
                | __ )| | ___   __ _ <br/>
                |  _ \| |/ _ \ / _` |<br/>
                | |_) | | (_) | (_| |<br/>
                |____/|_|\___/ \__, |<br/>
                <span dangerouslySetInnerHTML={{ __html: '&nbsp;'.repeat(16) }} />|___/ 
                </pre></Link>
            </nav>
        </header>
    );
}