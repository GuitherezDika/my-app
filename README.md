src/
    App.css
    App.test.tsx
    index.css
    index.tsx
    logo.svg
    react-app-env.d.ts
    reportWebVitals.ts
    setupTests.ts
    
====================

LEVEL 2
⭐ 1. Conditional Rendering (IF, Ternary, Logical &&)
(A) Tampilkan text jika input ≥ 10 karakter

Latihan:

Jika jumlah karakter < 10 → warnanya merah

Jika ≥ 10 → hijau

Challenge: buat dengan ternary operator.

==
(B) Tampilkan loader

Buat state:

const [loading, setLoading] = useState(false);


Skenario:

Klik tombol → loading = true

Setelah 2 detik → loading = false dan tampilkan data

Pakai:

{loading ? <p>Loading...</p> : <p>Data Loaded</p>}

==
⭐ 2. Event Handling (lebih kompleks)
(A) Input yang validasi panjang karakter

Latihan:

Jika karakter < 5 → tampilkan: “Minimal 5 karakter”

Jika valid → tampilkan: “OK!”

(B) Event onFocus & onBlur

Latihan:

Saat input focus → border biru

Saat blur → border hitam

Simpan dalam state:

const [isFocused, setIsFocused] = useState(false);

==
⭐ 3. Lists + TS Lanjutan
(A) List dengan object + TypeScript interface

Buat tipe:

interface Todo {
  id: number;
  title: string;
  done: boolean;
}


State:

const [todos, setTodos] = useState<Todo[]>([]);

Latihan:
Add item
Toggle done
Hapus item
Render list pakai map()

(B) Filter List

Dari list fruit:
apple, mango, banana, orange

Latihan:
Tambah input search
Ketik → filter list secara realtime
Case-insensitive (toLowerCase)

(C) Render list secara conditional
Tambahkan:
{fruits.length === 0 ? (
  <p>Tidak ada data</p>
) : (
  fruits.map(...)
)}
====

⭐ 4. TypeScript — Naik Level
(A) Buat reusable component dengan Props + TS

Contoh latihan: 
interface ButtonProps {
  label: string;
  onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);
Lalu panggil di App.


(B) Strict typing pada event

Kamu bisa latihan mengganti semua:

❌ event: any
✔ event: React.ChangeEvent<HTMLInputElement>

Contoh:
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setName(e.target.value);
};

(C) Gunakan Union Types

Latihan:

type Warna = 'merah' | 'biru' | 'hijau';

Gunakan pada radio button:
const [selected, setSelected] = useState<Warna | ''>('');

===================
🎒 LEVEL 3 – Mini Project

Setelah latihan-latihan kecil, buat 1 project kecil:

🚀 Mini Project: Form Registrasi Sederhana

Fitur:

Input nama

Dropdown jenis kelamin

Checkbox “Setuju dengan syarat”

Radio pilihan hobi

Validasi:

Semua field harus diisi

Checkbox wajib dicentang

Button submit → tampilkan hasilnya

TypeScript wajib:

Interface untuk form data

Event typing

Reusable input component (opsional)

Ini akan memperkuat semua konsep:

✔ Event handling
✔ List & map
✔ Conditional rendering
✔ TS props & interface
✔ Controlled component
