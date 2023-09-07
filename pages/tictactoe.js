import { useState } from "react";

const tictactoe = () => {

    const [turn, setTurn] = useState('X');
    const [isGame, setIsGame] = useState(false)
    const [isFull, setIsFull] = useState(0);
    const [winner, setWinner] = useState();

    const handleClick = (e) => {
        if(isGame === true) {
            return;
        }
        else {
            if(document.getElementById(e.target.id).innerHTML === 'X' || document.getElementById(e.target.id).innerHTML === 'O') {
                return;
            }
            else {
                if(turn === 'X') {
                    setTurn('O')
                    document.getElementById(e.target.id).innerHTML = turn;
                    setIsFull(isFull + 1)
                    let game = false


                    // first column
                    if(document.getElementById(1).innerHTML === 'X' && document.getElementById(2).innerHTML === 'X' && document.getElementById(3).innerHTML === 'X') {
                        document.getElementById(1).style.backgroundColor = 'red'
                        document.getElementById(2).style.backgroundColor = 'red'
                        document.getElementById(3).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }

                    // second column
                    else if(document.getElementById(4).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(6).innerHTML === 'X') {
                        document.getElementById(4).style.backgroundColor = 'red'
                        document.getElementById(5).style.backgroundColor = 'red'
                        document.getElementById(6).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }

                    // third column
                    else if(document.getElementById(7).innerHTML === 'X' && document.getElementById(8).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X') {
                        document.getElementById(7).style.backgroundColor = 'red'
                        document.getElementById(8).style.backgroundColor = 'red'
                        document.getElementById(9).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }
                    
                    // first row
                    else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(4).innerHTML === 'X' && document.getElementById(7).innerHTML === 'X') {
                        document.getElementById(1).style.backgroundColor = 'red'
                        document.getElementById(4).style.backgroundColor = 'red'
                        document.getElementById(7).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }

                    // second row
                    else if(document.getElementById(2).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(8).innerHTML === 'X') {
                        document.getElementById(2).style.backgroundColor = 'red'
                        document.getElementById(5).style.backgroundColor = 'red'
                        document.getElementById(8).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }

                    // third row
                    else if(document.getElementById(3).innerHTML === 'X' && document.getElementById(6).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X') {
                        document.getElementById(3).style.backgroundColor = 'red'
                        document.getElementById(6).style.backgroundColor = 'red'
                        document.getElementById(9).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }
                    //diagonal top left to bottom right
                    else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X') {
                        document.getElementById(1).style.backgroundColor = 'red'
                        document.getElementById(5).style.backgroundColor = 'red'
                        document.getElementById(9).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }

                    //diagonal top right to bottom left
                    else if(document.getElementById(3).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(7).innerHTML === 'X') {
                        document.getElementById(3).style.backgroundColor = 'red'
                        document.getElementById(5).style.backgroundColor = 'red'
                        document.getElementById(7).style.backgroundColor = 'red'
                        setIsGame(true)
                        game = true
                    }
                    else if(isFull === 8) {
                        game = true
                        alert('Tie!!')
                    }

                    console.log(game)
                    

                    const checkIsEmpty = () => {
                        let randomNum = Math.floor(Math.random() * 10) + 1;
                        if(randomNum === 10) {
                            randomNum -= 1
                        }
                        if(document.getElementById(randomNum).innerHTML === 'X' || document.getElementById(randomNum).innerHTML === 'O') {
                            randomNum = Math.floor(Math.random() * 10) + 1;
                            checkIsEmpty()
                        }
                        else {
                            document.getElementById(randomNum).innerHTML = 'O'
                        }

                        
                    }
                    
                    setTimeout(() => {

                        if(isFull === 4 || game === true) {
                            return
                        }

                        //first column
                        else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(2).innerHTML === 'X' && document.getElementById(3).innerHTML === '') {
                            document.getElementById(3).innerHTML = 'O';
                        }
                        else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(3).innerHTML === 'X' && document.getElementById(2).innerHTML === '') {
                            document.getElementById(2).innerHTML = 'O';
                        }
                        else if(document.getElementById(2).innerHTML === 'X' && document.getElementById(3).innerHTML === 'X' && document.getElementById(1).innerHTML === '') {
                            document.getElementById(1).innerHTML = 'O';
                        }

                        //second column
                        else if(document.getElementById(4).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(6).innerHTML === '') {
                            document.getElementById(6).innerHTML = 'O';
                        }
                        else if(document.getElementById(4).innerHTML === 'X' && document.getElementById(6).innerHTML === 'X' && document.getElementById(5).innerHTML === '') {
                            document.getElementById(5).innerHTML = 'O';
                        }
                        else if(document.getElementById(5).innerHTML === 'X' && document.getElementById(6).innerHTML === 'X' && document.getElementById(4).innerHTML === '') {
                            document.getElementById(4).innerHTML = 'O';
                        }

                        //third column
                        else if(document.getElementById(7).innerHTML === 'X' && document.getElementById(8).innerHTML === 'X' && document.getElementById(9).innerHTML === '') {
                            document.getElementById(9).innerHTML = 'O';
                        }
                        else if(document.getElementById(7).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' && document.getElementById(8).innerHTML === '') {
                            document.getElementById(8).innerHTML = 'O';
                        }
                        else if(document.getElementById(8).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' && document.getElementById(7).innerHTML === '') {
                            document.getElementById(7).innerHTML = 'O';
                        }

                        //first row
                        else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(4).innerHTML === 'X' && document.getElementById(7).innerHTML === '') {
                            document.getElementById(7).innerHTML = 'O';
                        }
                        else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(7).innerHTML === 'X' && document.getElementById(4).innerHTML === '') {
                            document.getElementById(4).innerHTML = 'O';
                        }
                        else if(document.getElementById(4).innerHTML === 'X' && document.getElementById(7).innerHTML === 'X' && document.getElementById(1).innerHTML === '') {
                            document.getElementById(1).innerHTML = 'O';
                        }

                        //second row
                        else if(document.getElementById(2).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(8).innerHTML === '') {
                            document.getElementById(8).innerHTML = 'O';
                        }
                        else if(document.getElementById(2).innerHTML === 'X' && document.getElementById(8).innerHTML === 'X' && document.getElementById(5).innerHTML === '') {
                            document.getElementById(5).innerHTML = 'O';
                        }
                        else if(document.getElementById(5).innerHTML === 'X' && document.getElementById(8).innerHTML === 'X' && document.getElementById(2).innerHTML === '') {
                            document.getElementById(2).innerHTML = 'O';
                        }

                        //third row
                         else if(document.getElementById(3).innerHTML === 'X' && document.getElementById(6).innerHTML === 'X' && document.getElementById(9).innerHTML === '') {
                            document.getElementById(9).innerHTML = 'O';
                        }
                        else if(document.getElementById(3).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' && document.getElementById(6).innerHTML === '') {
                            document.getElementById(6).innerHTML = 'O';
                        }
                        else if(document.getElementById(6).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' && document.getElementById(3).innerHTML === '') {
                            document.getElementById(3).innerHTML = 'O';
                        }

                        //diagonal from top left to bottom right
                        else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(9).innerHTML === '') {
                            document.getElementById(9).innerHTML = 'O';
                        }
                        else if(document.getElementById(1).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' && document.getElementById(5).innerHTML === '') {
                            document.getElementById(5).innerHTML = 'O';
                        }
                        else if(document.getElementById(5).innerHTML === 'X' && document.getElementById(9).innerHTML === 'X' && document.getElementById(1).innerHTML === '') {
                            document.getElementById(1).innerHTML = 'O';
                        }

                        //diagonal from top right to bottom left
                        else if(document.getElementById(7).innerHTML === 'X' && document.getElementById(5).innerHTML === 'X' && document.getElementById(3).innerHTML === '') {
                            document.getElementById(3).innerHTML = 'O';
                        }
                        else if(document.getElementById(7).innerHTML === 'X' && document.getElementById(3).innerHTML === 'X' && document.getElementById(5).innerHTML === '') {
                            document.getElementById(5).innerHTML = 'O';
                        }
                        else if(document.getElementById(5).innerHTML === 'X' && document.getElementById(3).innerHTML === 'X' && document.getElementById(7).innerHTML === '') {
                            document.getElementById(7).innerHTML = 'O';
                        }


                        else {
                            checkIsEmpty()
                        }

                        //first column
                        if(document.getElementById(1).innerHTML === 'O' && document.getElementById(2).innerHTML === 'O' && document.getElementById(3).innerHTML === 'O') {
                            document.getElementById(1).style.backgroundColor = 'red'
                            document.getElementById(2).style.backgroundColor = 'red'
                            document.getElementById(3).style.backgroundColor = 'red'
                            setIsGame(true)
                            game = true
                        }
                        //second column
                        else if(document.getElementById(4).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(6).innerHTML === 'O') {
                            document.getElementById(4).style.backgroundColor = 'red'
                            document.getElementById(5).style.backgroundColor = 'red'
                            document.getElementById(6).style.backgroundColor = 'red'
                            setIsGame(true)
                            game = true
                        }
                        //third column
                        else if(document.getElementById(7).innerHTML === 'O' && document.getElementById(8).innerHTML === 'O' && document.getElementById(9).innerHTML === 'O') {
                            document.getElementById(7).style.backgroundColor = 'red'
                            document.getElementById(8).style.backgroundColor = 'red'
                            document.getElementById(9).style.backgroundColor = 'red'
                            setIsGame(true)
                            game = true
                        }
                        //first row
                        else if(document.getElementById(1).innerHTML === 'O' && document.getElementById(4).innerHTML === 'O' && document.getElementById(7).innerHTML === 'O') {
                            document.getElementById(1).style.backgroundColor = 'red'
                            document.getElementById(4).style.backgroundColor = 'red'
                            document.getElementById(7).style.backgroundColor = 'red'
                            setIsGame(true)
                        }
                        //second row
                        else if(document.getElementById(2).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(8).innerHTML === 'O') {
                            document.getElementById(2).style.backgroundColor = 'red'
                            document.getElementById(5).style.backgroundColor = 'red'
                            document.getElementById(8).style.backgroundColor = 'red'
                            setIsGame(true)
                            game = true
                        }
                        //third row
                        else if(document.getElementById(3).innerHTML === 'O' && document.getElementById(6).innerHTML === 'O' && document.getElementById(9).innerHTML === 'O') {
                            document.getElementById(3).style.backgroundColor = 'red'
                            document.getElementById(6).style.backgroundColor = 'red'
                            document.getElementById(9).style.backgroundColor = 'red'
                            setIsGame(true)
                        }
                        //diagonal left to right
                        else if(document.getElementById(1).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(9).innerHTML === 'O') {
                            document.getElementById(1).style.backgroundColor = 'red'
                            document.getElementById(5).style.backgroundColor = 'red'
                            document.getElementById(9).style.backgroundColor = 'red'
                            setIsGame(true)
                        }
                        //diagonal right to left
                        else if(document.getElementById(3).innerHTML === 'O' && document.getElementById(5).innerHTML === 'O' && document.getElementById(7).innerHTML === 'O') {
                            document.getElementById(3).style.backgroundColor = 'red'
                            document.getElementById(5).style.backgroundColor = 'red'
                            document.getElementById(7).style.backgroundColor = 'red'
                            setIsGame(true)
                            game = true
                        }

                        setTurn('X')
                    }, 1500)
                }
                else {
                    setTurn('X')
                }
            }
    
            
        }
        
        
    }

    const handleReset = () => {
        setTurn('X')
        setIsGame(false)
        setIsFull(false)
        for(let i = 1; i <= 9; i++) {
            document.getElementById(i).innerHTML = '';
            document.getElementById(i).style.backgroundColor = 'transparent';
        }
    }

    return (
        <div className="flex h-screen justify-center items-center flex-col space-y-8">
            <div className="text-2xl mb-10 md:text-6xl">Classic <span className="text-red-500">Tic Tac Toe</span></div>
            <div className="grid grid-cols-3">
                <div className="text-4xl">
                    <div id={1} className="border-black border-2 border-l-0 border-t-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                    <div id={2} className="border-black border-2 border-l-0 border-t-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                    <div id={3} className="border-black border-2 border-l-0 border-b-0 border-t-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                </div>
                <div className="text-4xl">
                    <div id={4} className="border-black border-2 border-t-0 border-l-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                    <div id={5} className="border-black border-2 border-l-0 border-t-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                    <div id={6} className="border-black border-2 border-l-0 border-b-0 border-t-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                </div>
                <div className="text-4xl">
                    <div id={7} className="border-black border-2 border-t-0 border-r-0 border-l-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                    <div id={8} className="border-black border-2 border-t-0 border-r-0 border-l-0 w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                    <div id={9} className="w-[80px] h-[80px] flex items-center justify-center cursor-pointer" onClick={handleClick}></div>
                </div>
            </div>
            {isGame ? (
                <div>Winner!</div>
            ) : (
                <div>
                    {turn === 'O' ? (
                    <div>O is thinking...</div>
                ) : (
                    <div>It is your turn!</div>
                )}
                </div>
            )}
            <div className="focus:outline-none border py-2 px-4 rounded-lg cursor-pointer border-red-500" onClick={handleReset}>Reset</div>
        </div>
    )
}

export default tictactoe;