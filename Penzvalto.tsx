import { useState } from 'react'

const Penzvalto = () => {
    const [forint, setForint] = useState<number>(0);
    const [penznem, setPenznem] = useState<string>("");
    const [eredmeny, setEredmeny] = useState<string>("");
    const euro = 380;
    const dollar = 350;

    function Atvaltas () {
        if(penznem === "euro") {
            setEredmeny(`Az összeg euróban: ${forint / euro}`);
        }
        else if(penznem === "dollár") {
            setEredmeny(`Az összeg dollárban: ${forint / dollar}`);
        }
    }

    return (
    <>
      <input type='number' onChange={e => setForint(Number(e.target.value))} />
      <select name="penznem" id="penznem" onChange={e => setPenznem(e.target.value)}>
        <option value="">valassz</option>
        <option value="euro">euro</option>
        <option value="dollar">dollar</option>
      </select>
      <button type='button' onClick={Atvaltas}>Átváltás</button>
      <h2>Eredmény: {eredmeny}</h2>
    </>
  )
}
export default Penzvalto