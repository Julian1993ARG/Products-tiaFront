import Header from './Header';

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout ({ children }: LayoutProps) {
  return (
    <div className='min-w-full min-h-screen '>
      <Header />
      <main className='max-w-screen-xl border-8 rounded-3xl mx-auto p-4 bg-white'>
        {children}
      </main>
    </div>
  );
}
