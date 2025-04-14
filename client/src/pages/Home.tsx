import ProfileCard from "@/components/ProfileCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl opacity-60"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-60"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-12 md:py-24 flex flex-col items-center justify-center">
        <ProfileCard 
          name="Il Mio Nome"
          bio="Benvenuto alla mia pagina personale"
          profileImageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80"
        />
        
        <footer className="mt-8 text-center">
          <p className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-medium">
            © {new Date().getFullYear()} • Creato con <span className="text-red-500">♥</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
