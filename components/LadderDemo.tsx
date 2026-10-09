"use client";

import { useEffect, useRef, useState } from "react";

type Level = {
  id: string;
  label: string;
  tool: string;
  caption: string;
  files?: { name: string; code: string }[];
};

const levels: Level[] = [
  {
    id: "scratch",
    label: "Scratch",
    tool: "Blok visual",
    caption: "Anak mulai dari menyusun blok. Logika perulangan sudah terlihat, tanpa harus mengetik.",
  },
  {
    id: "roblox",
    label: "Roblox Studio",
    tool: "Lua",
    caption: "Ide yang sama, sekarang ditulis sebagai teks di dalam game engine.",
    files: [
      {
        name: "Script.server.lua",
        code: `for i = 1, 3 do
  print("Halo, dunia!")
  task.wait(1)
end`,
      },
    ],
  },
  {
    id: "python",
    label: "Python",
    tool: "Python 3",
    caption: "Sintaks lebih ringkas, dan mulai berurusan dengan modul serta fungsi.",
    files: [
      {
        name: "salam.py",
        code: `import time

for _ in range(3):
    print("Halo, dunia!")
    time.sleep(1)`,
      },
    ],
  },
  {
    id: "react",
    label: "React dan Express",
    tool: "Fullstack",
    caption: "Tingkat tertinggi: data datang dari API, dan tampilan dirender oleh komponen.",
    files: [
      {
        name: "server.js",
        code: `app.get("/api/salam", (req, res) => {
  res.json(Array(3).fill("Halo, dunia!"));
});`,
      },
      {
        name: "Salam.jsx",
        code: `export function Salam({ pesan }) {
  return pesan.map((p, i) => <p key={i}>{p}</p>);
}`,
      },
    ],
  },
];

const OUTPUT = ["Halo, dunia!", "Halo, dunia!", "Halo, dunia!"];

function Flag() {
  return (
    <svg className="flag" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path d="M3 1v14" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M3.8 2.2c2-1.2 3.6 1.2 6 0 1.2-.6 2.2-.4 3.2.2v6c-1-.6-2-.8-3.2-.2-2.4 1.2-4-1.2-6 0z" fill="#2fb344" stroke="#fff" strokeWidth="1" />
    </svg>
  );
}

function ScratchBlocks() {
  return (
    <div className="scratch" role="img" aria-label="Blok Scratch: ketika bendera hijau diklik, ulangi 3 kali, katakan Halo dunia selama 1 detik">
      <div className="blk blk-event">
        ketika <Flag /> diklik
      </div>
      <div className="c-block">
        <div className="c-top">
          ulangi <span className="pill">3</span> kali
        </div>
        <div className="c-body">
          <div className="blk blk-looks">
            katakan <span className="pill">Halo, dunia!</span> selama <span className="pill">1</span> detik
          </div>
        </div>
        <div className="c-bottom" />
      </div>
    </div>
  );
}

export default function LadderDemo() {
  const [active, setActive] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [running, setRunning] = useState(false);
  const timers = useRef<number[]>([]);

  const clear = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  useEffect(() => clear, []);

  const select = (i: number) => {
    clear();
    setLines([]);
    setRunning(false);
    setActive(i);
  };

  const run = () => {
    clear();
    setLines([]);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setLines(OUTPUT);
      return;
    }
    setRunning(true);
    OUTPUT.forEach((line, i) => {
      timers.current.push(
        window.setTimeout(() => {
          setLines((prev) => [...prev, line]);
          if (i === OUTPUT.length - 1) setRunning(false);
        }, 450 * (i + 1)),
      );
    });
  };

  const level = levels[active];

  return (
    <div className="ladder" aria-label="Contoh tangga belajar coding">
      <div className="ladder-tabs" role="tablist" aria-label="Tingkat belajar">
        {levels.map((l, i) => (
          <button
            key={l.id}
            role="tab"
            id={`tab-${l.id}`}
            aria-selected={i === active}
            aria-controls="ladder-panel"
            className="ladder-tab"
            onClick={() => select(i)}
          >
            <span className="rung">{i + 1}</span>
            {l.label}
          </button>
        ))}
      </div>

      <div className="ladder-panel" id="ladder-panel" role="tabpanel" aria-labelledby={`tab-${level.id}`}>
        <p className="ladder-tool">{level.tool}</p>

        <div className="stage" key={level.id}>
          {level.id === "scratch" ? (
            <ScratchBlocks />
          ) : (
            level.files?.map((f) => (
              <div className="file" key={f.name}>
                <div className="file-name">{f.name}</div>
                <pre>
                  <code>{f.code}</code>
                </pre>
              </div>
            ))
          )}
        </div>

        <div className="run-row">
          <button className="run-btn" onClick={run} disabled={running}>
            Jalankan
          </button>
          <div className="output" aria-live="polite">
            {lines.length === 0 ? (
              <span className="output-empty">Keluaran muncul di sini</span>
            ) : (
              lines.map((l, i) => <div key={i}>{l}</div>)
            )}
          </div>
        </div>

        <p className="ladder-caption">{level.caption}</p>
      </div>
    </div>
  );
}
