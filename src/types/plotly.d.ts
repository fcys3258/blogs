declare module "plotly.js-basic-dist-min" {
  const Plotly: {
    newPlot: (
      root: HTMLElement,
      data: unknown[],
      layout?: Record<string, unknown>,
      config?: Record<string, unknown>,
    ) => Promise<void>;
  };

  export default Plotly;
}
