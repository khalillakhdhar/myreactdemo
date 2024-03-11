import React, {useState} from 'react'

export default function Indice() {
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');
  const [resultat, setResultat] = useState(null);
  const [message, setMessage] = useState('');
  const calculateImc=(e)=>{
    e.preventDefault();
    const poidKg = parseFloat(poids);
    const tailleM = parseFloat(taille);
    const imc = poidKg / (tailleM * tailleM);
    setResultat(Math.round(imc));
    interpretImc(); 
  }
  const interpretImc=()=>{

    if(resultat < 20){
      setMessage('maigre');
    }else if( resultat <= 25){
      setMessage('Normale');
    }
    else 
    {
      setMessage('surpoids');
    }
    /*setPoids('');
    setTaille('');
    setMessage('');
    setResultat(null);*/
  }
  
  return (
    <div>
      <form>
        <h1>Calculer votre IMC ({poids} {taille})</h1>
      <div className="mb-3">
        <label  className="form-label">Poids</label>
        <input type='number' className="form-control" id='poids' placeholder='Poids en kg' value={poids} onChange={(e)=>setPoids(e.target.value) } />
        </div>
        <div className="mb-3">
        <label  className="form-label">Taille</label>
        <input type='number' className="form-control" value={taille} id='taille'  placeholder='Taille en m' onChange={(e)=>setTaille(e.target.value) } />
        </div>
        <button onClick={calculateImc}  className="btn btn-primary">Calculer</button>
        {resultat!==null && (<div>
          <h2>Votre IMC est de {resultat}</h2>
          <p>Interpretation : {message}</p>
        </div>)
        
        }



      </form>


    </div>
  )
}
