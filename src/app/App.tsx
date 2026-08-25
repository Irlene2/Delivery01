import { useState } from "react";
import {
  Sun, Moon, Eye, EyeOff, LayoutDashboard, ShoppingBag, Package,
  BookOpen, MessageCircle, Settings, LogOut, Bell, ChevronDown,
  ChevronRight, MoreVertical, TrendingUp, Clock, DollarSign, ExternalLink,
} from "lucide-react";
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

type Screen = "login" | "dashboard";

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen w-full bg-background transition-colors duration-300">
        {screen === "login"
          ? <LoginScreen dark={dark} setDark={setDark} onLogin={() => setScreen("dashboard")} />
          : <Dashboard dark={dark} setDark={setDark} onLogout={() => setScreen("login")} />}
      </div>
    </div>
  );
}

/* ═══════════════════════════ LOGIN ═══════════════════════════ */

function LoginScreen({ dark, setDark, onLogin }: { dark: boolean; setDark: (v: boolean) => void; onLogin: () => void }) {
  const [showPw, setShowPw] = useState(false);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center px-4 relative">
      <button onClick={() => setDark(!dark)}
        className="absolute top-5 right-5 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center text-foreground shadow-sm hover:opacity-80 transition-opacity">
        {dark ? <Sun size={17} /> : <Moon size={17} />}
      </button>

      <div className="w-full max-w-[370px] bg-card rounded-2xl shadow-lg px-8 py-10 flex flex-col items-center">
        <div className="relative flex items-center justify-center mb-6">
          <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full" style={{ backgroundColor: "#F5C84A" }} />
          <span className="relative z-10 font-extrabold text-3xl tracking-tight select-none" style={{ fontFamily: "'Nunito',sans-serif", color: "#E84E1E" }}>delivery</span>
        </div>

        <h1 className="text-xl font-bold text-card-foreground text-center mb-1" style={{ fontFamily: "'Nunito',sans-serif" }}>Que bom te ver por aqui!</h1>
        <p className="text-sm text-muted-foreground text-center mb-6" style={{ fontFamily: "'Nunito',sans-serif" }}>Faça login para gerenciar seus pedidos.</p>

        <input type="text" placeholder="E-mail ou número de celular" value={email} onChange={e => setEmail(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-[#E84E1E] transition-all mb-3"
          style={{ fontFamily: "'Nunito',sans-serif" }} />

        <div className="w-full relative mb-2">
          <input type={showPw ? "text" : "password"} placeholder="Digite sua senha" value={pw} onChange={e => setPw(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-lg border border-border bg-card text-card-foreground placeholder:text-muted-foreground text-sm outline-none focus:border-[#E84E1E] transition-all"
            style={{ fontFamily: "'Nunito',sans-serif" }} />
          <button type="button" onClick={() => setShowPw(!showPw)} tabIndex={-1}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-card-foreground transition-colors">
            {showPw ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>

        <div className="w-full flex justify-end mb-5">
          <button className="text-xs text-muted-foreground hover:text-card-foreground transition-colors" style={{ fontFamily: "'Nunito',sans-serif" }}>Esqueceu sua senha?</button>
        </div>

        <button onClick={onLogin} className="w-full py-3 rounded-lg text-white font-bold text-sm mb-5 hover:opacity-90 active:opacity-75 transition-opacity"
          style={{ backgroundColor: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>Entrar</button>

        <div className="w-full flex items-center gap-3 mb-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground whitespace-nowrap" style={{ fontFamily: "'Nunito',sans-serif" }}>ou continue com</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm font-semibold mb-3 hover:bg-muted transition-colors" style={{ fontFamily: "'Nunito',sans-serif" }}>
          <GoogleIcon /> Entrar com o Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-border bg-card text-card-foreground text-sm font-semibold mb-6 hover:bg-muted transition-colors" style={{ fontFamily: "'Nunito',sans-serif" }}>
          <AppleIcon dark={dark} /> Entrar com a Apple
        </button>

        <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>
          Novo por aqui?{" "}<button className="font-bold hover:underline" style={{ color: "#E84E1E" }}>Criar conta</button>
        </p>
      </div>
    </div>
  );
}

/* ═══════════════════════════ DASHBOARD ═══════════════════════════ */

const NAV = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: ShoppingBag,     label: "Pedidos" },
  { icon: Package,         label: "Estoque" },
  { icon: BookOpen,        label: "Catálogo" },
  { icon: MessageCircle,   label: "WhatsApp" },
  { icon: Settings,        label: "Configurações" },
];

const ORDERS = [
  { id: "#1024", name: "João Silva",     phone: "(11) 99999-9999", ini: "JS", ac: "#fca5a5", status: "Em entrega", sc: "#2563eb", sb: "#dbeafe", pay: "Pago (PIX)",    pc: "#16a34a", total: "R$ 68,90",  date: "Hoje, 14:32" },
  { id: "#1023", name: "Ana Martins",    phone: "(11) 98888-8888", ini: "AM", ac: "#c084fc", status: "Em preparo", sc: "#ea580c", sb: "#ffedd5", pay: "Pago (Cartão)", pc: "#16a34a", total: "R$ 45,50",  date: "Hoje, 14:15" },
  { id: "#1022", name: "Carlos Pereira", phone: "(11) 97777-7777", ini: "CP", ac: "#93c5fd", status: "Confirmado", sc: "#0891b2", sb: "#cffafe", pay: "Pago (PIX)",    pc: "#16a34a", total: "R$ 32,00",  date: "Hoje, 13:50" },
  { id: "#1021", name: "Fernanda Lima",  phone: "(11) 96666-6666", ini: "FL", ac: "#fdba74", status: "Novo",       sc: "#6b7280", sb: "#f3f4f6", pay: "Pendente",      pc: "#ea580c", total: "R$ 27,90",  date: "Hoje, 13:42" },
  { id: "#1020", name: "Rafael Souza",   phone: "(11) 95555-5555", ini: "RP", ac: "#86efac", status: "Em entrega", sc: "#2563eb", sb: "#dbeafe", pay: "Pago (Cartão)", pc: "#16a34a", total: "R$ 56,70",  date: "Hoje, 13:20" },
];

const STOCK = [
  { name: "X-Burger",        qty: "25 un.", status: "Normal",   sc: "#16a34a", sb: "#dcfce7", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=80&h=80&fit=crop&auto=format" },
  { name: "Batata Frita",    qty: "8 un.",  status: "Baixo",    sc: "#d97706", sb: "#fef3c7", img: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=80&h=80&fit=crop&auto=format" },
  { name: "Refrigerante 350ml", qty: "3 un.", status: "Crítico", sc: "#dc2626", sb: "#fee2e2", img: "https://images.unsplash.com/photo-1716800586014-fea19e9453fb?w=80&h=80&fit=crop&auto=format" },
  { name: "Pizza Calabresa", qty: "15 un.", status: "Normal",   sc: "#16a34a", sb: "#dcfce7", img: "https://images.unsplash.com/photo-1544982503-9f984c14501a?w=80&h=80&fit=crop&auto=format" },
];

const WA = [
  { name: "João Silva",     msg: "Olá! Gostaria de saber sobre meu pedido #1024", time: "14:35", badge: 1 },
  { name: "Ana Martins",    msg: "Tem algum cupom disponível hoje?",               time: "14:18", badge: 0 },
  { name: "Carlos Pereira", msg: "Quero alterar o endereço do pedido #1022",       time: "13:51", badge: 2 },
];

const CHART = [
  { t: "00h", v: 0 }, { t: "04h", v: 90 }, { t: "08h", v: 310 },
  { t: "12h", v: 700 }, { t: "16h", v: 1600 }, { t: "20h", v: 1200 }, { t: "24h", v: 980 },
];

function Dashboard({ dark, setDark, onLogout }: { dark: boolean; setDark: (v: boolean) => void; onLogout: () => void }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ── Sidebar ── */}
      <aside className="w-[185px] flex-shrink-0 bg-card border-r border-border flex flex-col">
        {/* Logo */}
        <div className="flex items-center gap-2 px-5 py-6">
          <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
            <span className="absolute inset-0 rounded-full" style={{ backgroundColor: "#F5C84A" }} />
            <span className="relative z-10 font-extrabold text-base leading-none" style={{ color: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>d</span>
          </div>
          <span className="font-extrabold text-[1.35rem] leading-none" style={{ color: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>delivery</span>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-0.5 px-3 flex-1 pt-1">
          {NAV.map(({ icon: Icon, label }) => {
            const on = active === label;
            return (
              <button key={label} onClick={() => setActive(label)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-all"
                style={{ backgroundColor: on ? "#E84E1E" : "transparent", fontFamily: "'Nunito',sans-serif" }}>
                <Icon size={18} style={{ color: on ? "#fff" : undefined }} className={on ? "" : "text-muted-foreground"} />
                <span style={{ color: on ? "#fff" : undefined }} className={on ? "" : "text-foreground"}>{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Sair */}
        <div className="px-3 pb-6">
          <button onClick={onLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold hover:bg-muted transition-colors w-full"
            style={{ color: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>
            <LogOut size={18} style={{ color: "#E84E1E" }} />
            Sair
          </button>
        </div>
      </aside>

      {/* ── Content ── */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-7 py-4 bg-card border-b border-border flex-shrink-0">
          <div>
            <h1 className="text-2xl font-bold text-foreground flex items-center gap-2" style={{ fontFamily: "'Nunito',sans-serif" }}>
              Olá, Administrador! <span>👋</span>
            </h1>
            <p className="text-sm text-muted-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>Bem-vindo ao painel de controle do Delivery.</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Theme pill */}
            <div className="flex items-center gap-0.5 rounded-full p-1" style={{ backgroundColor: dark ? "#1f2937" : "#f3f4f6" }}>
              <button onClick={() => setDark(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: !dark ? "#fff" : "transparent", boxShadow: !dark ? "0 1px 3px rgba(0,0,0,.12)" : "none" }}>
                <Sun size={15} className="text-foreground" />
              </button>
              <button onClick={() => setDark(true)}
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all"
                style={{ backgroundColor: dark ? "#374151" : "transparent" }}>
                <Moon size={15} className={dark ? "text-white" : "text-muted-foreground"} />
              </button>
            </div>

            {/* Bell */}
            <div className="relative">
              <button className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-muted transition-colors" style={{ backgroundColor: dark ? "#1f2937" : "#f3f4f6" }}>
                <Bell size={19} className="text-foreground" />
              </button>
              <span className="absolute -top-0.5 -right-0.5 w-5 h-5 rounded-full text-white text-[10px] font-bold flex items-center justify-center" style={{ backgroundColor: "#E84E1E" }}>3</span>
            </div>

            {/* User */}
            <div className="flex items-center gap-2.5 pl-1">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center flex-shrink-0"
                style={{ backgroundImage: "url(https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format)", backgroundSize: "cover" }} />
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>Administrador</span>
                <span className="text-xs text-muted-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>Super Admin</span>
              </div>
              <ChevronDown size={15} className="text-muted-foreground" />
            </div>
          </div>
        </header>

        {/* Scrollable body */}
        <main className="flex-1 overflow-y-auto p-6 bg-background space-y-5">
          {/* KPI row */}
          <div className="grid grid-cols-4 gap-4">
            <KpiCard iconBg="#fde8e0" icon={<ShoppingBag size={22} style={{ color: "#E84E1E" }} />} label="Pedidos hoje"     value="24"            delta="+12% em relação a ontem" />
            <KpiCard iconBg="#fef9c3" icon={<Clock       size={22} style={{ color: "#d97706" }} />} label="Em preparo"      value="8"             delta="+3 desde a última hora" />
            <KpiCard iconBg="#d1fae5" icon={<ScooterIcon />}                                         label="Em entrega"      value="5"             delta="+1 desde a última hora" />
            <KpiCard iconBg="#e5e7eb" icon={<DollarSign  size={22} className="text-foreground"  />}  label="Faturamento hoje" value="R$ 1.250,00"  delta="+18% em relação a ontem" big />
          </div>

          {/* Main split */}
          <div className="flex gap-5 items-start">
            {/* Left */}
            <div className="flex-1 min-w-0 flex flex-col gap-5">
              {/* Pedidos recentes */}
              <div className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-bold text-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>Pedidos recentes</h2>
                  <button className="text-sm font-bold border rounded-lg px-3 py-1.5 hover:bg-muted transition-colors" style={{ color: "#E84E1E", borderColor: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>Ver todos</button>
                </div>

                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {["Pedido", "Cliente", "Status", "Pagamento", "Total", "Data", ""].map(h => (
                        <th key={h} className="text-left pb-2.5 text-xs font-semibold text-muted-foreground border-b border-border" style={{ fontFamily: "'Nunito',sans-serif" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {ORDERS.map(o => (
                      <tr key={o.id} className="border-b border-border last:border-0">
                        <td className="py-3 text-sm font-bold text-foreground pr-3" style={{ fontFamily: "'Nunito',sans-serif" }}>{o.id}</td>
                        <td className="py-3 pr-3">
                          <div className="flex items-center gap-2">
                            <span className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-gray-700 flex-shrink-0" style={{ backgroundColor: o.ac }}>{o.ini}</span>
                            <div>
                              <p className="text-sm font-semibold text-foreground leading-tight" style={{ fontFamily: "'Nunito',sans-serif" }}>{o.name}</p>
                              <p className="text-xs text-muted-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>{o.phone}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-3">
                          <span className="text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap" style={{ color: o.sc, backgroundColor: o.sb }}>{o.status}</span>
                        </td>
                        <td className="py-3 pr-3 text-sm font-semibold whitespace-nowrap" style={{ color: o.pc, fontFamily: "'Nunito',sans-serif" }}>{o.pay}</td>
                        <td className="py-3 pr-3 text-sm font-semibold text-foreground whitespace-nowrap" style={{ fontFamily: "'Nunito',sans-serif" }}>{o.total}</td>
                        <td className="py-3 pr-2 text-sm text-muted-foreground whitespace-nowrap" style={{ fontFamily: "'Nunito',sans-serif" }}>{o.date}</td>
                        <td className="py-3"><button className="text-muted-foreground hover:text-foreground"><MoreVertical size={15} /></button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="mt-3 flex items-center gap-1 text-sm font-bold hover:underline" style={{ color: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>
                  Ver todos os pedidos <ChevronRight size={14} />
                </button>
              </div>

              {/* Resumo de vendas */}
              <div className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-base font-bold text-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>Resumo de vendas</h2>
                  <button className="text-sm border border-border rounded-lg px-3 py-1.5 flex items-center gap-1.5 text-foreground hover:bg-muted transition-colors" style={{ fontFamily: "'Nunito',sans-serif" }}>
                    Hoje <ChevronDown size={14} />
                  </button>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-36">
                    <p className="text-2xl font-bold text-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>R$ 1.250,00</p>
                    <p className="text-xs text-muted-foreground mt-0.5 mb-1.5" style={{ fontFamily: "'Nunito',sans-serif" }}>Faturamento hoje</p>
                    <p className="text-xs font-bold flex items-center gap-1" style={{ color: "#16a34a", fontFamily: "'Nunito',sans-serif" }}>
                      <TrendingUp size={12} /> +18% em relação a ontem
                    </p>
                  </div>
                  <div className="flex-1 h-44">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={CHART} margin={{ top: 5, right: 5, left: -25, bottom: 0 }}>
                        <defs>
                          <linearGradient id="sg" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor="#E84E1E" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#E84E1E" stopOpacity={0.02} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                        <XAxis dataKey="t" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{ backgroundColor: "var(--card)", border: "1px solid var(--border)", borderRadius: 10, fontSize: 12, fontFamily: "'Nunito',sans-serif" }}
                          formatter={(v: number) => [`R$ ${v}`, "Vendas"]}
                        />
                        <Area type="monotone" dataKey="v" stroke="#E84E1E" strokeWidth={2.5} fill="url(#sg)"
                          dot={{ fill: "#E84E1E", r: 3, strokeWidth: 0 }}
                          activeDot={{ r: 5, fill: "#E84E1E", strokeWidth: 0 }} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Right panel */}
            <div className="w-[310px] flex-shrink-0 flex flex-col gap-5">
              {/* Estoque */}
              <div className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-bold text-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>
                    Estoque <span className="font-normal text-muted-foreground">- Produtos em destaque</span>
                  </p>
                  <button className="text-xs font-bold border rounded-lg px-2.5 py-1 hover:bg-muted transition-colors flex-shrink-0" style={{ color: "#E84E1E", borderColor: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>Ver estoque</button>
                </div>

                <div className="flex text-xs font-semibold text-muted-foreground border-b border-border pb-2 mb-1" style={{ fontFamily: "'Nunito',sans-serif" }}>
                  <span className="flex-1">Produto</span>
                  <span className="w-14 text-center">Estoque</span>
                  <span className="w-16 text-right">Status</span>
                </div>

                {STOCK.map(s => (
                  <div key={s.name} className="flex items-center py-2.5 border-b border-border last:border-0">
                    <div className="flex items-center gap-2.5 flex-1 min-w-0">
                      <img src={s.img} alt={s.name} className="w-9 h-9 rounded-lg object-cover flex-shrink-0" />
                      <span className="text-sm font-semibold text-foreground truncate" style={{ fontFamily: "'Nunito',sans-serif" }}>{s.name}</span>
                    </div>
                    <span className="w-14 text-center text-xs text-muted-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>{s.qty}</span>
                    <div className="w-16 flex justify-end">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ color: s.sc, backgroundColor: s.sb }}>{s.status}</span>
                    </div>
                  </div>
                ))}

                <button className="mt-3 flex items-center gap-1 text-sm font-bold hover:underline" style={{ color: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>
                  Ver todos os produtos <ChevronRight size={14} />
                </button>
              </div>

              {/* WhatsApp */}
              <div className="bg-card rounded-2xl border border-border p-5">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-foreground" style={{ fontFamily: "'Nunito',sans-serif" }}>
                    WhatsApp <span className="font-normal text-muted-foreground">- Conversas recentes</span>
                  </p>
                  <button className="text-xs font-bold border rounded-lg px-2.5 py-1 hover:bg-muted transition-colors flex-shrink-0" style={{ color: "#E84E1E", borderColor: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>Ver todas</button>
                </div>

                <div className="flex flex-col gap-4">
                  {WA.map(w => (
                    <div key={w.name} className="flex items-start gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#25D366" }}>
                        <WaIcon />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1 mb-0.5">
                          <span className="text-sm font-bold text-foreground truncate" style={{ fontFamily: "'Nunito',sans-serif" }}>{w.name}</span>
                          <span className="text-xs text-muted-foreground flex-shrink-0" style={{ fontFamily: "'Nunito',sans-serif" }}>{w.time}</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate" style={{ fontFamily: "'Nunito',sans-serif" }}>{w.msg}</p>
                      </div>
                      {w.badge > 0 && (
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0 mt-0.5" style={{ backgroundColor: "#E84E1E" }}>{w.badge}</span>
                      )}
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full flex items-center justify-center gap-1.5 text-sm font-bold hover:underline" style={{ color: "#E84E1E", fontFamily: "'Nunito',sans-serif" }}>
                  Abrir WhatsApp Web <ExternalLink size={13} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

/* ═══════════════════════════ SUB-COMPONENTS ═══════════════════════════ */

function KpiCard({ iconBg, icon, label, value, delta, big }: {
  iconBg: string; icon: React.ReactNode; label: string; value: string; delta: string; big?: boolean;
}) {
  return (
    <div className="bg-card rounded-2xl border border-border p-5 flex items-start gap-4">
      <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: iconBg }}>{icon}</div>
      <div className="min-w-0">
        <p className="text-sm text-muted-foreground mb-0.5" style={{ fontFamily: "'Nunito',sans-serif" }}>{label}</p>
        <p className={`font-bold text-foreground leading-tight ${big ? "text-xl" : "text-3xl"}`} style={{ fontFamily: "'Nunito',sans-serif" }}>{value}</p>
        <p className="text-xs font-semibold flex items-center gap-1 mt-1" style={{ color: "#16a34a", fontFamily: "'Nunito',sans-serif" }}>
          <TrendingUp size={11} />{delta}
        </p>
      </div>
    </div>
  );
}

function ScooterIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6.5" cy="17" r="2.5" /><circle cx="17.5" cy="17" r="2.5" />
      <path d="M6.5 17H3v-3.5L6 8h8.5l2 3.5H19a2 2 0 0 1 2 2V17h-2" />
      <path d="M14.5 8V5h2" />
    </svg>
  );
}

function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615Z" fill="#4285F4" />
      <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18Z" fill="#34A853" />
      <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332Z" fill="#FBBC05" />
      <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58Z" fill="#EA4335" />
    </svg>
  );
}

function AppleIcon({ dark }: { dark: boolean }) {
  return (
    <svg width="15" height="18" viewBox="0 0 814 1000" fill={dark ? "#ffffff" : "#000000"}>
      <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.5-57.9-155.5-127.4C46.2 790 0 698.4 0 610.1c0-154.4 100.2-236.4 198.9-236.4 52.6 0 96.5 34.6 129.4 34.6 31.8 0 81.6-36.6 143.8-36.6 22.9 0 108.2 2 159.6 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z" />
    </svg>
  );
}
