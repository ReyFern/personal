"use client";

import Image from "next/image";
import Navbar from "@/components/Navbar";
import "@/app/globals.css"
import commands from "@/app/commands.json"
import { useState, FormEvent } from "react";

export default function Home() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]); // To store history of outputs

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent page reload

    if (command in commands) {
      const response = commands[command as keyof typeof commands] as string;
      if (response.constructor === Array) {
        setOutput(prev => prev.concat([`C:\\Users\\you> ${command}`, response[0]]));
        for (let i = 1; i < (response as string[]).length; i++) {
          setOutput(prev => prev.concat(response[i]));
        }
      }
      else {
        setOutput(prev => prev.concat([`C:\\Users\\you> ${command}`, response]));
      }
    } else {
      setOutput(prev => [...prev, `C:\\Users\\you> ${command}`, "Command not found. Type 'help' to see all available commands."]);
    }

    setCommand(""); // Clear input
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar/>
      <main id="main" className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start ml-10">
        {/*<Typewriter lines={['This is line one', 'This is line two']} />*/}
        <div>
          <p className="font-semibold whitespace-pre tracking-[-0.15em] leading-4 text-green-400">
          &nbsp;____      _                 _      __        __   _         _ _       <br/>
          |  _ \ ___| |__   __ _ _ __ ( )___  \ \      / /__| |__  ___(_) |_ ___ <br/>
          | |_) / _ \ '_ \ / _` | '_ \|// __|  \ \ /\ / / _ \ '_ \/ __| | __/ _ \<br/>
          |  _ &lt;  __/ | | | (_| | | | | \__ \   \ V  V /  __/ |_) \__ \ | ||  __/<br/>
          |_| \_\___|_| |_|\__,_|_| |_| |___/    \_/\_/ \___|_.__/|___/_|\__\___|
          </p>
        </div>
        <div id="description" className="w-4xl">
          <p>
            Hello there! This is the personal website of Rehan, a computer science student from the UK. I am currently working on my A-levels and aspire to become a software engineer or game developer. Feel free to have a look around. :D
          </p>
        </div>
        <div id="terminal" className="flex flex-col gap-2 mt-8">
          {/* Output display */}
          <div className="p-4 rounded w-full max-w-3xl">
            {output.map((line, idx) => (
              <div key={idx}>
                <br/>
                <p>{line}</p>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex gap-2 mt-4">
              <span>C:\Users\you&gt;</span>
              <input
                type="text"
                value={command}
                onChange={e => setCommand(e.target.value)}
                placeholder="Input command or 'help'"
                className="border-none outline-none w-3xl"
              />
            </form>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
