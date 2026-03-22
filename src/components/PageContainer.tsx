import type { ContainerProps } from "../types/profile";

export function PageContainer({ children }: ContainerProps) {
  return <div className="mx-auto max-w-7xl px-6 py-6 md:px-10 lg:px-12">{children}</div>;
}