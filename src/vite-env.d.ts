/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Base URL where the offering/hero videos are hosted (GCS bucket or CDN). */
  readonly VITE_MEDIA_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
