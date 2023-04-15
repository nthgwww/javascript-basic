const gifts = [
    'CPU i9',
    'RAM 32gb RGB',
    'Keybroad 3million',
]

function App(){
    const[gift, setGift]=useState();

    const ramdomGift = () =>{
        const index = Math.floor(Math.random()*gifts.length)
        
        setGift(gifts[index])
    }

    return (
        <div>
            <h1>{gift||"Chưa có phần thường"}</h1>
            <button onClick={randomGift}>Lấy thưởng</button>
        </div>
    )
}

export default App