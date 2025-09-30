import { useState } from 'react'

const Homero = () => {
    const [homerseklet, setHomerseklet] = useState<number>(0);
    const [eredmeny, setEredmeny] = useState<string>("");

    function Atvaltas () {
        setEredmeny(`A hőmérséklet Kelvinben: ${homerseklet + 273.15} K, Fahrenheitben: ${homerseklet * 1.8 + 32} F`);
    }

    return (
    <>
      <input type='number' onChange={e => setHomerseklet(Number(e.target.value))} />
      <button type='button' onClick={Atvaltas}>Átváltás</button>
      <h2>Eredmény: {eredmeny}</h2>
    </>
  )
}
export default Homero