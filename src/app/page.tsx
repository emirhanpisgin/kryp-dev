import TypeWriter from "@/components/util/typewriter";

export default function Home() {
    return (
        <main className="grid h-screen place-items-center">
            <TypeWriter text="Kryp Arnold" duration={0.8} className="animate-land-in opacity-0 text-8xl select-none" />
        </main>
    );
}
