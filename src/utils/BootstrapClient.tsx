"use client";

import { useEffect } from "react";

function BootstrapClient(): null {
  useEffect(() => {
    const loadBootstrap = async (): Promise<void> => {
      await import("bootstrap/dist/js/bootstrap.bundle.min.js");
    };
    loadBootstrap();
  }, []);

  return null;
}

export default BootstrapClient;
