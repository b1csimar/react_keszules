import { useState } from 'react'

const BMI = () => {
    const [suly, setSuly] = useState<number>(0);
    const [magassag, setMagassag] = useState<number>(0);
    const [eredmeny, setEremeny] = useState<string>("");

    function Kiszalolas () {
        let bmi = Number(suly / (magassag * magassag));
        if(0 <= bmi && bmi <= 16){
            setEremeny(`Súlyos soványság: ${bmi}`);
        }
        else if(16 <= bmi && bmi <= 17) {
            setEremeny(`Mérsékelt soványság: ${bmi}`);
        }
    }

    return (
    <>
      <input type='number' onChange={e => setSuly(Number(e.target.value))} />
      <input type='number' onChange={e => setMagassag(Number(e.target.value))} />
      <button type='button' onClick={Kiszalolas}>Kiszámítás</button>
      <h2>Eredmény: {eredmeny}</h2>
    </>
  )
}
export default BMI