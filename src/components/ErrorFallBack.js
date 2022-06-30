function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button
        onClick={resetErrorBoundary}
        className="button button--effect d-none d-sm-block"
      >
        Reload
      </button>
    </div>
  );
}

export default ErrorFallback;
