import BrowserPreview from "@/components/BrowserPreview";
import Counter from "@/components/Counter";
import LadderDemo from "@/components/LadderDemo";
import Reveal from "@/components/Reveal";
import { featured, profile, projects, skills, teaching } from "@/data/content";

const marqueeItems = skills.flatMap((g) => g.items);

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#atas">
          {profile.name}
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#mengajar">Mengajar</a>
          <a href="#proyek">Proyek</a>
          <a href="#keahlian">Keahlian</a>
          <a href="#kontak">Kontak</a>
        </nav>
      </header>

      <main id="atas">
        <section className="hero">
          <div className="hero-text">
            <p className="badge">
              <span className="pulse" aria-hidden="true" /> Terbuka untuk proyek web
            </p>
            <p className="where">{profile.city}</p>
            <h1>{profile.name}</h1>
            <p className="lede">
              Saya membuat aplikasi web dan game, lalu mengajarkan caranya: dari menyusun blok di Scratch
              sampai menulis React dan Express.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#proyek">
                Lihat proyek
              </a>
              <a className="btn" href="#kontak">
                Hubungi saya
              </a>
            </div>
          </div>
          <LadderDemo />
        </section>

        <section className="stats" aria-label="Ringkasan">
          <ul className="plain">
            <li>
              <strong>
                <Counter to={3} />
              </strong>
              <span>tahun mengajar</span>
            </li>
            <li>
              <strong>
                <Counter to={teaching.schools.length} />
              </strong>
              <span>sekolah ditangani</span>
            </li>
            <li>
              <strong>
                <Counter to={projects.length + 1} />
              </strong>
              <span>proyek dibangun</span>
            </li>
            <li>
              <strong>
                <Counter to={4} />
              </strong>
              <span>jenjang kurikulum</span>
            </li>
          </ul>
        </section>

        <div className="marquee" aria-label="Teknologi yang saya pakai">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((s, i) => (
              <span key={i} aria-hidden={i >= marqueeItems.length}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <section className="section" id="mengajar">
          <h2>Mengajar coding dari nol</h2>
          <Reveal>
            <div className="teach">
              <div>
                <p>
                  Di {teaching.org}, Bandung, saya mengajar coding dan computational thinking selama{" "}
                  {teaching.years}, di kelas ekstrakurikuler maupun program in-house. Saya juga menjadi
                  vendor coding untuk beberapa sekolah.
                </p>
                <h3>Sekolah yang saya tangani</h3>
                <ul className="plain">
                  {teaching.schools.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <ol className="steps" aria-label="Urutan kurikulum">
                <li>
                  <strong>Scratch</strong>
                  <span>Pemula. Logika lewat blok visual.</span>
                </li>
                <li>
                  <strong>Roblox Studio</strong>
                  <span>Menengah. Membuat game dengan Lua.</span>
                </li>
                <li>
                  <strong>Python</strong>
                  <span>Dasar pemrograman teks dan OOP.</span>
                </li>
                <li>
                  <strong>React.js dan Express.js</strong>
                  <span>Lanjutan. Fullstack, SQL, dan MongoDB.</span>
                </li>
              </ol>
            </div>
          </Reveal>
        </section>

        <section className="section" id="proyek">
          <h2>Proyek</h2>

          <Reveal>
            <article className="featured">
              <div className="featured-head">
                <h3>
                  <a
                    className="project-link"
                    href={featured.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {featured.title} <span aria-hidden="true">↗</span>
                  </a>
                </h3>
                <p className="stack">{featured.stack.join(", ")}</p>
              </div>
              <p>{featured.summary}</p>
              <BrowserPreview url={featured.href} title={featured.title} />
              <ul className="plain points">
                {featured.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal>
            <ul className="project-list">
              {projects.map((p) => (
                <li key={p.title}>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                  <p className="stack">{p.stack}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <section className="section" id="keahlian">
          <h2>Keahlian</h2>
          <Reveal>
            <div className="skills">
              {skills.map((g) => (
                <div key={g.group}>
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
          <p className="edu">Pendidikan: {profile.school}.</p>
        </section>

        <section className="section contact" id="kontak">
          <h2>Mari bicara</h2>
          <Reveal>
            <p>
              Untuk kerja sama pembuatan web, program coding di sekolah, atau sekadar diskusi, kirim email
              atau lihat kode saya di GitHub.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          {profile.name}, {profile.city}
        </p>
      </footer>
    </>
  );
}