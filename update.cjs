const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf-8');

// Theming replacements
code = code.replace(/bg-slate-950/g, 'bg-[#060606]');
code = code.replace(/bg-slate-900/g, 'bg-zinc-900');
code = code.replace(/bg-slate-800/g, 'bg-white/5');
code = code.replace(/border-slate-800/g, 'border-white/10');
code = code.replace(/border-slate-700/g, 'border-white/10');
code = code.replace(/text-slate-400/g, 'text-zinc-400');
code = code.replace(/text-slate-300/g, 'text-zinc-300');
code = code.replace(/text-slate-200/g, 'text-zinc-200');
code = code.replace(/text-slate-500/g, 'text-zinc-500');

// Accent Colors
code = code.replace(/bg-orange-500\/10/g, 'bg-rose-500/10');
code = code.replace(/bg-orange-500\/20/g, 'bg-rose-500/20');
code = code.replace(/text-orange-400/g, 'text-rose-400');
code = code.replace(/text-orange-500/g, 'text-rose-500');
code = code.replace(/border-orange-500\/20/g, 'border-rose-500/20');
code = code.replace(/border-orange-500\/30/g, 'border-rose-500/30');
code = code.replace(/border-orange-500\/50/g, 'border-rose-500/50');
code = code.replace(/to-orange-600/g, 'to-rose-600');
code = code.replace(/from-orange-400/g, 'from-rose-500');
code = code.replace(/bg-orange-600/g, 'bg-rose-600');
code = code.replace(/hover:bg-orange-500/g, 'hover:bg-rose-500');
code = code.replace(/hover:bg-orange-600/g, 'hover:bg-rose-600');
code = code.replace(/hover:border-orange-500/g, 'hover:border-rose-500');
code = code.replace(/hover:text-orange-300/g, 'hover:text-rose-300');
code = code.replace(/focus:border-orange-500/g, 'focus:border-rose-500');
code = code.replace(/focus:ring-orange-500/g, 'focus:ring-rose-500');
code = code.replace(/from-orange-500/g, 'from-rose-500');
code = code.replace(/bg-orange-500/g, 'bg-rose-500');

// Typography adjustments
code = code.replace(/text-3xl md:text-4xl font-bold/g, 'text-4xl md:text-5xl font-extrabold tracking-tight text-white');

fs.writeFileSync('src/App.tsx', code);
