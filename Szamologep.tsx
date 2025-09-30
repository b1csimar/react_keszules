import { useState } from 'react'

const Szamologep = () => {
    const [szam1, setSzam1] = useState<number>(0);
    const [szam2, setSzam2] = useState<number>(0);
    const [muvelet, setMuvelet] = useState<string>("");
    const [eredmeny, setEredmeny] = useState<number>(0);

    function Szamolas () {
        if(muvelet === "+") {
            setEredmeny(Number(szam1 + szam2));
        }
        else if(muvelet === "-") {
            setEredmeny(Number(szam1 - szam2));
        }
        else if(muvelet === "*") {
            setEredmeny(Number(szam1 * szam2));
        }
        else if(muvelet === "/") {
            setEredmeny(Number(szam1 * szam2));
        }
    }

      return (
    <>
      <input type='number' onChange={e => setSzam1(Number(e.target.value))} />
      <select name="muvelet" id="muvelet" onChange={e => setMuvelet(e.target.value)}>
        <option value="">kezdes</option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type='number' onChange={e => setSzam2(Number(e.target.value))} />
      <button type='button' onClick={Szamolas}>
        Számolás
      </button>
      <h2>Eredmény: {eredmeny}</h2>
    </>
  )
}
export default Szamologep