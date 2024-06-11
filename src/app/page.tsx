import TypeWriter from "@/components/typewriter";

export default function Home() {
    return (
        <main className="grid h-screen place-items-center">
            <TypeWriter
                text="Kryp Arnold"
                duration={0.8}
                className="text-7xl animate-land-in [--land-delay:1000ms]"
            />
        </main>
    );
}
