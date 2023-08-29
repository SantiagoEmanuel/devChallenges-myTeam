import './App.css'
import { Card } from "./components/Card";

export default function App() {

  return (
    <main className='main'>
      <header className='mainHeader'>
        <div className='mainHeader--title'>
          <h1>The creative crew</h1>
        </div>
        <div className='mainHeader--about'>
          <div className="mainHeader--about_container">
            <h4 className='about--title'>WHO WE ARE</h4>
            <p className='about--text'>We are team of creatively diverse, driven, innovative individuals working in various locations from the world.</p>
          </div>
        </div>
      </header>
      <section className='mainSection'>
        <Card
          id='bill'
          name='Bill Mahoney'
          imgUrl='/photo1.png'
          work='PRODUCT MANAGER'
        />
        <Card
          id='saba'
          name='Saba Cabrera'
          imgUrl='/photo2.png'
          work='ART DIRECTOR'
        />
        <Card
          id='shae'
          name='Shae Le'
          imgUrl='/photo3.png'
          work='TECH LEAD'
        />
        <Card
          id='skylah'
          name='Skylah Lu'
          imgUrl='/photo4.png'
          work='UX DESIGNER'
        />
        <Card
          id='griff'
          name='Grif Richards'
          imgUrl='/photo5.png'
          work='DEVELOPER'
        />
        <Card
          id='stan'
          name='Stan John'
          imgUrl='/photo6.png'
          work='DEVELOPER'
        />
      </section>

      <footer className='footerPage'>
        <p className='pFooter'>created by <span className='username'>SantiagoEmanuel</span> - <a className='aFooter' href="https://devChallenges.io/">devChallenges.io</a></p>
      </footer>
    </main>
  )
}