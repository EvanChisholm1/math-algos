type Row = { x: number; y: number; r: number; q: number };

type Certificate = { d: number; s: number; t: number };

const eeaRecurse = (rows: Row[]): Certificate => {
    const i = rows.length;
    const q = Math.floor(rows[i - 2].r / rows[i - 1].r);

    const x = rows[i - 2].x - q * rows[i - 1].x;
    const y = rows[i - 2].y - q * rows[i - 1].y;
    const r = rows[i - 2].r - q * rows[i - 1].r;

    if (r === 0) {
        return {
            d: rows[i - 1].r,
            s: rows[i - 1].x,
            t: rows[i - 1].y,
        };
    }

    return eeaRecurse([...rows, { x, y, r, q }]);
};

const eea = (a: number, b: number): Certificate => {
    return eeaRecurse([
        { x: 1, y: 0, r: Math.max(a, b), q: 0 },
        { x: 0, y: 1, r: Math.min(a, b), q: 0 },
    ]);
};

console.log(eea(2172, 423));
