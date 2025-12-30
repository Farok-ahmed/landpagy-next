interface ElementsLayoutProps {
  children: React.ReactNode;
}

// Note: Header and Footer are handled by the route layout (elements)/layout.tsx
// This component is kept for backwards compatibility as a simple pass-through
export default function ElementsLayout({ children }: ElementsLayoutProps) {
  return <>{children}</>;
}
