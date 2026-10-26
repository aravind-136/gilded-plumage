
import './App.css'

function App() {
  return (
    <div className="website">
      <header className="navbar">

<a className="logo" href="#home">
  <img
    src="/images/gilded-plumage-logo.png"
    alt="Gilded Plumage golden feather emblem"
  />
  <span>GILDED PLUMAGE</span>
</a>

        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#collection">Collection</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">LUXURY MEETS NATURE'S ART</p>

            <h1>
              Born of Nature.
              <br />
              <span>Draped in Gold.</span>
            </h1>

            <p className="hero-description">
              Inspired by the majestic beauty of peacock feathers,
              discover a world where natural artistry meets timeless luxury.
            </p>

            <a className="gold-button" href="#collection">
              Explore the Collection ↗
            </a>
          </div>
        </section>

        <section className="intro" id="about">
          <p className="eyebrow">OUR INSPIRATION</p>
          <h2>Nature's Art. Fashion's Soul.</h2>
          <p>
            Gilded Plumage celebrates elegance, artistry and individuality
            through rich jewel tones, intricate details and luxurious fabrics.
          </p>
        </section>

        
        <section className="collection" id="collection">
          <p className="eyebrow">THE SIGNATURE COLLECTION</p>
          <h2>Eight Expressions of Elegance</h2>
          <p className="collection-intro">
            Inspired by peacock feathers, jewel tones and the artistry
            of luxurious fabrics.
          </p>

          <h3 className="collection-category">Women's Collection</h3>
          <div className="collection-grid">
            <article className="collection-card">
              <div className="card-image image-one" />
              <h3>01. Ruby Elegance</h3>
              <p>Burgundy tones and intricate gold detailing.</p>
            </article>

            <article className="collection-card">
              <div className="card-image image-two" />
              <h3>02. Emerald Grace</h3>
              <p>Emerald richness with refined embellishment.</p>
            </article>

            <article className="collection-card">
              <div className="card-image image-three" />
              <h3>03. Midnight Allure</h3>
              <p>Sapphire elegance with regal character.</p>
            </article>

            <article className="collection-card">
              <div className="card-image image-four" />
              <h3>04. Majestic Plum</h3>
              <p>Royal violet with feather-inspired details.</p>
            </article>
          </div>

          <h3 className="collection-category">Men's Collection</h3>
          <div className="collection-grid">
            <article className="collection-card">
              <div className="card-image image-five" />
              <h3>05. Emerald Royale</h3>
              <p>Emerald formalwear with gold accents.</p>
            </article>

            <article className="collection-card">
              <div className="card-image image-six" />
              <h3>06. Midnight Peacock</h3>
              <p>Midnight blue and sophisticated tailoring.</p>
            </article>

            <article className="collection-card">
              <div className="card-image image-seven" />
              <h3>07. Golden Plumage</h3>
              <p>Gold textures and ornamental craftsmanship.</p>
            </article>

            <article className="collection-card">
              <div className="card-image image-eight" />
              <h3>08. Royal Violet</h3>
              <p>Regal violet and traditional elegance.</p>
            </article>
          </div>
        </section>

        <section className="palette" id="materials">
          <p className="eyebrow">THE COLOUR STORY</p>
          <h2>Inspired by Nature</h2>
          <p className="palette-description">
            A rich palette drawn from the iridescent beauty of peacock feathers.
          </p>

          <div className="swatches">
            <div className="swatch">
              <div style={{ backgroundColor: '#066B4D' }} />
              <h3>Emerald</h3>
              <p>#066B4D</p>
            </div>

            <div className="swatch">
              <div style={{ backgroundColor: '#007C91' }} />
              <h3>Peacock Blue</h3>
              <p>#007C91</p>
            </div>

            <div className="swatch">
              <div style={{ backgroundColor: '#19A7A8' }} />
              <h3>Teal</h3>
              <p>#19A7A8</p>
            </div>

            <div className="swatch">
              <div style={{ backgroundColor: '#3155A6' }} />
              <h3>Sapphire</h3>
              <p>#3155A6</p>
            </div>

            <div className="swatch">
              <div style={{ backgroundColor: '#6B3FA0' }} />
              <h3>Royal Violet</h3>
              <p>#6B3FA0</p>
            </div>

            <div className="swatch">
              <div style={{ backgroundColor: '#C9A227' }} />
              <h3>Antique Gold</h3>
              <p>#C9A227</p>
            </div>
          </div>

          <div className="fabrics">
            <h2>Luxurious by Nature</h2>
            <div className="fabric-list">
              <div>
                <h3>Silk</h3>
                <p>Lustrous, elegant and reflective.</p>
              </div>
              <div>
                <h3>Satin</h3>
                <p>Smooth, fluid and refined.</p>
              </div>
              <div>
                <h3>Velvet</h3>
                <p>Rich, textured and regal.</p>
              </div>
              <div>
                <h3>Organza</h3>
                <p>Light, layered and feather-like.</p>
              </div>
            </div>
          </div>
        </section>

        <footer id="contact">
          <h2>GILDED PLUMAGE</h2>
          <p>Luxury Meets Nature's Art</p>
          <a href="mailto:hello@gildedplumage.example">
            Contact the Brand
          </a>
          <p className="copyright">© Gilded Plumage · A Fashion Concept</p>
        </footer>
      </main>
    </div>
  )
}

export default App
