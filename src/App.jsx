
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Bloque from './components/bloque';
import Boton from './components/boton';
import  Layout  from './components/layout';
import NavBar from './components/navbar';

import Informate from './components/pages/informate';
import ComoAyudar from './components/pages/comoayudar';
import ConoceMas from './components/pages/conocemas';
import Login from './components/pages/login';

function App() {


  return (
    <>
      <div className='bg-gradient-to-r from-yellow-300 from-10% bg-orange-500 via-30% to-red-500 to-90%  min-h-screen'>
      
      <NavBar></NavBar>
      
       <Layout>
        <p>
        ¿Qué es el cambio climático?

El cambio climático supone la alteración de la composición de la atmósfera global que causa múltiples consecuencias negativas para la naturaleza y la vida. La humanidad sabe bien a qué se refieren, porque ya está aquí en forma de desertificación, subida del nivel del mar o de temperaturas extremas.
<p></p>




¿Qué es lo que produce el cambio climático?

Existe una posición cada vez más mayoritaria en la comunidad científica sobre la actividad humana como la causa de la modificación de las condiciones climáticas actuales. De ahí que la investigadora del Turba Lab coincida al definir el presente cambio climático como “antropogénico”, es decir, causado por la humanidad y no por anomalías biofísicas o naturales.
        </p>

<BrowserRouter>
<Routes>
  <Route path='/informate' element={<Informate></Informate>}></Route>
  <Route path='/comoayudar' element={<ComoAyudar></ComoAyudar>}></Route>
  <Route path='/conocemas' element={<ConoceMas></ConoceMas>}></Route>
  <Route path='/login' element={<Login></Login>}></Route>
  <Route path='/*' element={<Navigate to="/"></Navigate>}></Route>

</Routes>
</BrowserRouter>


<Bloque></Bloque>








       </Layout>












      </div>
     
    </>
  )
}

export default App
