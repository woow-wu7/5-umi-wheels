interface ErrorComponentProps {
  error: Error;
}

export const ErrorComponent: React.FC<ErrorComponentProps> = (error) => (
  <p>发生错误: {error}</p>
);
