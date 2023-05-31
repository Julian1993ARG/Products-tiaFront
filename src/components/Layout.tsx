import Header from './Header';

type LayoutProps = {
  children: React.ReactNode
  admin?: boolean
}

export default function Layout ({ children, admin = false }: LayoutProps) {
  if (admin) {
    return (
      <div className='min-w-full min-h-screen '>
        <main className='w-full rounded-r-xl mx-auto mt-2 bg-white'>
          {children}
        </main>
      </div>
    );
  };
  return (
    <div className='min-w-full min-h-screen '>
      <Header />
      <main className='max-w-screen-xl border-8 rounded-3xl mx-auto mt-2 p-4 bg-white'>
        {children}
      </main>
    </div>
  );
}
