function Game() {
    return (
        <main>
            <h1>Game page</h1>
            <div className="w-[80%] m-auto">
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr] gap-4">
                    <div className="bg-amber-400 h-40">1</div>
                    <div className="bg-amber-500 ">2</div>
                    <div className="bg-amber-600">3</div>
                    <div className="bg-amber-700">4</div>
                </div>
            </div>
        </main>
    );
}

export default Game;
