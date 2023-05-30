import Header from './Header';

type LayoutProps = {
  children: React.ReactNode
}

export default function AdminLayout ({ children }: LayoutProps) {
  return (
    <div className='min-w-full min-h-screen '>
      <Header />
      <main className='max-w-screen-2xl rounded-3xl mx-auto mt-2 p-4 bg-white relative'>
        {children}
      </main>
    </div>
  );
}
