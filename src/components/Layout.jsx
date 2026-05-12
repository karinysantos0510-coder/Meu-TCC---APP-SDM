import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, BookOpen, Church, Calendar, Menu, X, Cross } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import brasaoImg from '../images/brasaoImg.png'

const navItems = [
  { path: "/", label: "Início", icon: Home },
  { path: "/liturgia", label: "Liturgia das Horas", icon: BookOpen },
  { path: "/oracoes", label: "Orações", icon: Cross },
  { path: "/comunidade", label: "Comunidade", icon: Church },
  { path: "/calendario", label: "Calendário", icon: Calendar },
];

export default function Layout() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 bg-primary flex-col z-50">
        <div className="p-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <img
              src={brasaoImg}
              alt="Brasão"
              className="w-10 h-10 object-contain shrink-0"
            />
            <div>
              <h1 className="font-cinzel text-lg font-bold text-white tracking-wide">Divina Misericórdia</h1>
              <p className="text-xs text-white/50 font-inter">Família da Divina Misericórdia</p>
            </div>
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path || 
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-mercy-gold/15 text-mercy-gold font-medium"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <item.icon className="w-4.5 h-4.5" />
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-6 border-t border-white/10">
          <p className="text-[10px] text-white/30 font-inter text-center leading-relaxed">
            "Jesus, eu confio em Vós"
          </p>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-white/10">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-2">
            <img
              src={brasaoImg}
              alt="Brasão"
              className="w-7 h-7 object-contain"
            />
            <span className="font-cinzel text-sm font-bold text-white">Divina Misericórdia</span>
          </div>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white/80 p-1">
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden fixed top-14 left-0 right-0 z-40 bg-primary border-b border-white/10"
          >
            <nav className="p-3 space-y-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path ||
                  (item.path !== "/" && location.pathname.startsWith(item.path));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg font-inter text-sm transition-all ${
                      isActive
                        ? "bg-mercy-gold/15 text-mercy-gold font-medium"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="lg:ml-72 pt-14 lg:pt-0 min-h-screen">
        <Outlet />
      </main>

      {/* Mobile Bottom Nav */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border">
        <div className="flex items-center justify-around h-16 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-2 py-1 rounded-lg transition-all ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : ""}`} />
                <span className="text-[10px] font-inter">{item.label.split(" ")[0]}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}